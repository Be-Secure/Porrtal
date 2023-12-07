﻿/*
Copyright 2023 Comcast Cable Communications Management, LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { InjectionToken, Inject, Injectable, Injector } from '@angular/core';
import { Observable, from, throwError } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { AUTH_N_INTERFACE } from './auth-n-interface';
import { AuthNInterface } from './auth-n-interface';

export interface AuthNInterceptorConfiguration {
  protectedResourceMap: Map<string, string[]>;
}

export const AUTH_N_INTERCEPTOR_CONFIG =
  new InjectionToken<AuthNInterceptorConfiguration>(
    'AuthNInterceptorConfiguration'
  );

@Injectable()
export class AuthNInterceptor implements HttpInterceptor {
  private tokenCache = new Map<string, { token: string; expiration: Date }>();
  private authN?: AuthNInterface;
  private authNInterceptorConfig?: AuthNInterceptorConfiguration;

  constructor(private injector: Injector) {}

  private isUrlMatch(url: string, pattern: string): boolean {
    const regex = new RegExp('^' + pattern.replace(/\*/g, '.*') + '$');
    return regex.test(url);
  }

  private isTokenExpired(tokenInfo: {
    token: string;
    expiration: Date;
  }): boolean {
    return new Date() > tokenInfo.expiration;
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!this.authN) {
      this.authN = this.injector.get(AUTH_N_INTERFACE);
    }

    if (!this.authNInterceptorConfig) {
      this.authNInterceptorConfig = this.injector.get(
        AUTH_N_INTERCEPTOR_CONFIG
      );
    }

    for (let [pattern, scopes] of this.authNInterceptorConfig
      .protectedResourceMap) {
      if (this.isUrlMatch(req.url, pattern)) {
        if (scopes.length > 0) {
          // Sort the scopes to ensure consistent cache key
          const sortedScopes = scopes.sort().join('|');
          const cachedTokenInfo = this.tokenCache.get(sortedScopes);

          let tokenFetchObservable: Observable<string>;

          if (cachedTokenInfo && !this.isTokenExpired(cachedTokenInfo)) {
            // Use the cached token
            tokenFetchObservable = from(Promise.resolve(cachedTokenInfo.token));
          } else {
            // if getAccessToken is not implemented, throw error
            if (!this.authN?.getAccessToken) {
              return throwError(
                () =>
                  new Error(
                    'Internal Error in AuthNInterceptor: AuthN Service does not implement getAccessToken()'
                  )
              );
            }

            // Fetch a new token using the injected token service
            tokenFetchObservable = from(
              this.authN?.getAccessToken(scopes)
            ).pipe(
              switchMap((token) => {
                // Cache the new token with an expiration date
                const expirationDate = new Date(
                  new Date().getTime() + 60 * 60 * 1000
                ); // Example: 1 hour from now
                this.tokenCache.set(sortedScopes, {
                  token,
                  expiration: expirationDate,
                });
                return Promise.resolve(token);
              })
            );
          }

          return tokenFetchObservable.pipe(
            switchMap((authToken: string) => {
              const authReq = req.clone({
                headers: req.headers.set(
                  'Authorization',
                  `Bearer ${authToken}`
                ),
              });
              return next.handle(authReq);
            }),
            catchError((error: HttpErrorResponse) => {
              if (error.status === 401 && cachedTokenInfo) {
                // If token is expired, clear cache and retry
                this.tokenCache.delete(sortedScopes);
                return this.intercept(req, next);
              }
              return throwError(error);
            })
          );
        } else {
          break;
        }
      }
    }

    // If no match is found in the protectedResourceMap
    return next.handle(req);
  }
}
