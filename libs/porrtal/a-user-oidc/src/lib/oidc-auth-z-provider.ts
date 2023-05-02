/*
Copyright 2022 Comcast Cable Communications Management, LLC

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

import { StateObject } from '@porrtal/a-api';
import { ShellStateService } from '@porrtal/a-shell';
import {
  AuthNInterface,
  AuthZProviderMessage,
  AuthZProviderInterface,
  AuthZProviderPendingView,
  AuthZProviderState,
} from '@porrtal/a-user';
import { BehaviorSubject, Observable } from 'rxjs';

export class OidcAuthZProvider implements AuthZProviderInterface {
  public state$: Observable<AuthZProviderState>;
  public name = 'primary';
  scopes?: string[];
  errorMessage$?: AuthZProviderMessage;
  warningMessage$?: AuthZProviderMessage;
  props?: StateObject;
  roles?: string[];
  pendingViews?: AuthZProviderPendingView[];

  private stateSubj = new BehaviorSubject<AuthZProviderState>('');
  private authN?: AuthNInterface;

  private shellStateService?: ShellStateService;

  public init(authN: AuthNInterface, shellStateService: ShellStateService) {
    this.shellStateService = shellStateService;

    this.authN = authN;

    if (this.stateSubj.getValue() === '') {
      this.stateSubj.next('init');
      this.authN.state$.subscribe((state) => {
        console.log('oidc auth z provider init:', {
          state,
          authN: this.authN,
        });
        switch (state) {
          case 'authenticated': {
            this.roles = ['authenticated'];

            // update the shell for this provider with ready and the permissions check function
            this.shellStateService?.dispatch({
              type: 'setAuthZReady',
              name: this.name,
            });
            console.log('oidc auth z provider - set ready', {
              state: this.shellStateService?.get(),
            });

            Promise.resolve(true).then(() => {
              this.shellStateService?.dispatch({
                type: 'registerAuthZPermissionCheck',
                name: this.name,
                checkPermission: (parm) => {
                  return this.roles?.some((role) => role === parm) ?? false;
                },
              });
            });
            console.log('oidc auth z provider - set permission check', {
              state: this.shellStateService?.get(),
            });

            Promise.resolve(true).then(() => {
              console.log('oidc auth z provider - set permission check', {
                state: this.shellStateService?.get(),
              });
            });
            this.stateSubj.next('ready');
            break;
          }

          case 'authenticating':
            this.stateSubj.next('init');
            break;

          case 'error':
            this.errorMessage$ = { message: 'Auth N Failed.' };
            this.stateSubj.next('error');
            break;

          default:
            this.stateSubj.next('');
            break;
        }
      });
    }
  }

  constructor() {
    this.state$ = this.stateSubj;
  }
}
