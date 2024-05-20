﻿/*
Copyright 2024 Comcast Cable Communications Management, LLC

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
import { StateObject } from '@porrtal/r-api';
import {
  AuthNAction,
  AuthNContext,
  AuthNDispatchContext,
  AuthNGetTokenContext,
  AuthZs,
  LoginCreds,
  RegisterUserInfo,
} from '@porrtal/r-user';
import { AuthNInterface } from '@porrtal/r-user';
import {
  ReactNode,
  Reducer,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
import { StrapiAuthZ } from './strapi-auth-z';

interface StrapiAdapterProps {
  children?: React.ReactNode;
}

type RequestStatus = '' | 'request' | 'success' | 'idle' | 'error';

interface StrapiAuthNInfo {
  authN: AuthNInterface;
  localState: {
    loginStatus: RequestStatus;
    loginParams?: {
      identifier: string;
      password: string;
    };
    registerStatus: RequestStatus;
    registerParams?: {
      username: string;
      email: string;
      password: string;
    };
    logoutStatus: RequestStatus;
  };
  accessTokensByScopeKey: {
    [scopeKey: string]: string;
  };
  errorsByScopeKey: {
    [scopeKey: string]: any;
  };
}

type StrapiAuthNAction =
  | {
      type: 'update';
      authN: AuthNInterface;
    }
  | {
      type: 'loginSuccess';
      user: {
        name: string;
        email: string;
      };
      claims: StateObject;
    }
  | {
      type: 'loginFailure';
      errorMessage: string;
    }
  | {
      type: 'logoutSuccess';
    }
  | {
      type: 'registerSuccess';
      user: {
        name: string;
        email: string;
      };
      claims: StateObject;
    }
  | {
      type: 'registerFailure';
      errorMessage: string;
    }
  | {
      type: 'fetchAccessTokenSuccess';
      scopeKey: string;
      accessToken: string;
    }
  | {
      type: 'fetchAccessTokenFailure';
      scopeKey: string;
      error: any;
    };

interface StrapiStateInterface {
  user?: {
    name: string;
    email: string;
  };
  loginStrategy: 'loginWithRedirect' | 'login' | 'loginAndRegister';
  isAuthenticated: boolean;
  isInitialized: boolean;
  jwt?: string;
}

type StrapiUserMeResponse = {
  username: string;
  email: string;
  porrtal_roles: { id: number; name: string }[];
};

type StrapiLoginAndRegisterResponse = {
  user?: {
    username: string;
    email: string;
    blocked: boolean;
    confirmed: boolean;
    createdAt: string;
    id: number;
    provider: string;
    updatedAt: string;
  };
  jwt?: string;
  error?: {
    status: number;
    name: string;
    message: string;
    details: any;
  };
};

export interface StrapiAuthenticationProps {
  strapiUri: string;
  allowRegistration: boolean;
  children?: React.ReactNode;
}

const reducer: Reducer<StrapiAuthNInfo, AuthNAction | StrapiAuthNAction> = (
  state,
  action
) => {
  switch (action.type) {
    case 'update': {
      const newState: StrapiAuthNInfo = {
        ...state,
        authN: {
          authNState: 'initialized',
          loginStrategy: 'loginAndRegister',
          ...state.authN,
          ...action.authN,
        },
      };
      return newState;
    }

    case 'login': {
      const newState: StrapiAuthNInfo = {
        ...state,
        localState: {
          ...state.localState,
          loginStatus: 'request',
          loginParams: {
            identifier: action.identifier,
            password: action.password,
          },
        },
      };
      return newState;
    }

    case 'register': {
      console.log('register action: ', action);
      const newState: StrapiAuthNInfo = {
        ...state,
        localState: {
          ...state.localState,
          registerStatus: 'request',
          registerParams: {
            username: action.username,
            email: action.email,
            password: action.password,
          },
        },
      };
      return newState;
    }

    case 'logout': {
      const newState: StrapiAuthNInfo = {
        ...state,
        localState: {
          ...state.localState,
          logoutStatus: 'request',
        },
      };
      return newState;
    }

    case 'loginFailure': {
      if (state.authN === null) {
        console.log('loginFailure: authN is null.  should never happen.');
        return state;
      }

      const newState: StrapiAuthNInfo = {
        ...state,
        localState: {
          ...state.localState,
          loginStatus: 'error',
          logoutStatus: 'idle',
          registerStatus: 'idle',
        },
        authN: {
          ...state.authN,
          user: undefined,
          authNState: 'error',
          errorMessage: action.errorMessage,
        },
      };
      return newState;
    }

    case 'loginSuccess': {
      if (state.authN === null) {
        console.log('loginSuccess: authN is null.  should never happen.');
        return state;
      }

      const newState: StrapiAuthNInfo = {
        ...state,
        localState: {
          ...state.localState,
          loginStatus: 'success',
          logoutStatus: 'idle',
          registerStatus: 'idle',
        },
        authN: {
          ...state.authN,
          user: action.user,
          authNState: 'authenticated',
          claims: action.claims,
        },
      };
      return newState;
    }

    case 'registerFailure': {
      if (state.authN === null) {
        console.log('registerFailure: authN is null.  should never happen.');
        return state;
      }

      const newState: StrapiAuthNInfo = {
        ...state,
        localState: {
          ...state.localState,
          loginStatus: 'error',
          registerStatus: 'error',
          logoutStatus: 'idle',
        },
        authN: {
          ...state.authN,
          user: undefined,
          authNState: 'error',
          errorMessage: action.errorMessage,
        },
      };
      return newState;
    }

    case 'registerSuccess': {
      if (state.authN === null) {
        console.log('registerSuccess: authN is null.  should never happen.');
        return state;
      }

      const newState: StrapiAuthNInfo = {
        ...state,
        localState: {
          ...state.localState,
          registerStatus: 'success',
          loginStatus: 'success',
          logoutStatus: 'idle',
        },
        authN: {
          ...state.authN,
          user: action.user,
          authNState: 'authenticated',
          claims: action.claims,
        },
      };
      console.log('registerSuccess: newState: ', newState);
      return newState;
    }

    case 'logoutSuccess': {
      if (state.authN === null) {
        console.log('registerSauthN is null.  should never happen.');
        return state;
      }

      const newState: StrapiAuthNInfo = {
        ...state,
        localState: {
          ...state.localState,
          loginStatus: 'idle',
          logoutStatus: 'idle',
          registerStatus: 'idle',
        },
        authN: {
          ...state.authN,
          user: undefined,
          authNState: 'initialized',
          claims: undefined,
          errorMessage: undefined,
        },
      };
      return newState;
    }

    case 'fetchAccessTokenSuccess': {
      // add an entry for the access token key
      const newState = {
        ...state,
        accessTokensByScopeKey: {
          ...state.accessTokensByScopeKey,
          [action.scopeKey]: action.accessToken,
        },
      };
      console.log('AuthN Reducer (fetchAccessTokenSuccess)...', {
        oldState: state,
        newState,
      });
      return newState;
    }

    case 'fetchAccessTokenFailure': {
      // add an entry to the errors for the access token key
      const newState = {
        ...state,
        errorByScopeKey: {
          ...state.errorsByScopeKey,
          [action.scopeKey]: (
            state.errorsByScopeKey[action.scopeKey] ?? []
          ).push(action.error),
        },
      };
      console.log('AuthN Reducer (fetchAccessTokenFailure)...', {
        oldState: state,
        newState,
      });
      return newState;
    }

    default:
      return state;
  }
};

interface Auth0AuthAdapterProps {
  children?: ReactNode;
}

type RequestResolver = {
  resolve: (value: string | PromiseLike<string>) => void;
  reject: (reason?: any) => void;
};

export function StrapiAuthentication(props: StrapiAuthenticationProps) {
  const [state, dispatch] = useReducer<
    Reducer<StrapiAuthNInfo, AuthNAction | StrapiAuthNAction>
  >(reducer, {
    authN: {
      authNState: 'initialized',
      loginStrategy: props.allowRegistration ? 'loginAndRegister' : 'login',
    },
    localState: { loginStatus: '', logoutStatus: '', registerStatus: '' },
    accessTokensByScopeKey: {},
    errorsByScopeKey: {},
  });

  const pendingAccessTokenRequestsRef = useRef<{
    [scopesKey: string]: Promise<string> | undefined;
  }>({});
  const accessTokenRequestResolversRef = useRef<{
    [scopesKey: string]: RequestResolver | undefined;
  }>({});

  // there are three places where we have successfully logged in:
  //   1. strapiLogin
  //   2. strapiRegister
  //   3. useEffect (jwt in local storage)
  // we need to triger the getToken in each place
  // Object.keys(pendingAccessTokenRequests).forEach
  const triggerPendingAccessTokenRequests = (
    pendingAccessTokenRequests: {
      [scopesKey: string]: Promise<string> | undefined;
    },
    accessTokenRequestResolvers: {
      [scopesKey: string]: RequestResolver | undefined;
    }
  ) => {
    Object.keys(pendingAccessTokenRequests).forEach((scopeKey) => {
      console.log('getToken for', scopeKey);
      getToken(JSON.parse(scopeKey))
        .then((token) => {
          console.log('getToken response', token);
          accessTokenRequestResolvers[scopeKey]?.resolve(token ?? '');
        })
        .catch((error) => {
          console.error('Error fetching access token', error);
          accessTokenRequestResolvers[scopeKey]?.reject(error);
        });
    });
  };

  const strapiLogin = (creds: LoginCreds) => {
    console.log(`Login: strapi uri: ${props.strapiUri}`);

    fetch(`${props.strapiUri}/api/auth/local`, {
      method: 'POST',
      body: JSON.stringify(creds),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response: StrapiLoginAndRegisterResponse) => {
        console.log('strapi login response: ', response);

        if (response.error || !response.jwt || !response.user) {
          alert(`strapi login failed: ${JSON.stringify(response.error)}`);
          dispatch({
            type: 'loginFailure',
            errorMessage: `loginFailure: error ${response?.error?.status}: ${response?.error?.message}`,
          });
        } else {
          localStorage.setItem('strapiJwt', response.jwt);

          console.log('login...', response);

          fetch(`${props.strapiUri}/api/users/me?populate=porrtal_roles`, {
            headers: { Authorization: `Bearer ${response.jwt}` },
          })
            .then((response) => response.json())
            .catch((err) => {
              alert(`strapi login failed: ${JSON.stringify(response.error)}`);
              dispatch({
                type: 'loginFailure',
                errorMessage: `loginFailure: error retrieving users/me?populate=porrtal_roles ${JSON.stringify(
                  err
                )}`,
              });
            })
            .then((res: StrapiUserMeResponse) => {
              console.log('strapi user/me response: ', res);

              dispatch({
                type: 'loginSuccess',
                user: {
                  name: res.username,
                  email: res.email,
                },
                claims: {
                  ...(res as unknown as StateObject),
                  jwt: response.jwt ?? '',
                },
              });

              const pendingAccessTokenRequests = pendingAccessTokenRequestsRef.current;
              const accessTokenRequestResolvers = accessTokenRequestResolversRef.current;
          
              triggerPendingAccessTokenRequests(
                pendingAccessTokenRequests,
                accessTokenRequestResolvers
              );
            });
        }
      });
  };

  const strapiRegister = (userInfo: RegisterUserInfo) => {
    console.log(`Register: strapi uri: ${props.strapiUri}`);

    fetch(`${props.strapiUri}/api/auth/local/register`, {
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response: StrapiLoginAndRegisterResponse) => {
        console.log('strapi login response: ', response);

        if (response.error || !response.jwt || !response.user) {
          alert(`strapi register failed: ${JSON.stringify(response.error)}`);
          dispatch({
            type: 'registerFailure',
            errorMessage: `registerFailure: error ${response?.error?.status}: ${response?.error?.message}`,
          });
        } else {
          localStorage.setItem('strapiJwt', response.jwt);
          let jwt = response.jwt;

          fetch(`${props.strapiUri}/api/users/me?populate=porrtal_roles`, {
            headers: { Authorization: `Bearer ${response.jwt}` },
          })
            .then((response) => response.json())
            .catch((err) => {
              console.log(`get user with jwt failed:`, JSON.stringify(err));
              dispatch({
                type: 'registerFailure',
                errorMessage: `registerFailure: error retrieving users/me?populate=porrtal_roles ${JSON.stringify(
                  err
                )}`,
              });
            })
            .then((res: StrapiUserMeResponse) => {
              console.log('strapi user/me response: ', res);

              dispatch({
                type: 'registerSuccess',
                user: {
                  name: res.username,
                  email: res.email,
                },
                claims: {
                  ...(res as unknown as StateObject),
                  jwt: jwt ?? '',
                },
              });

              const pendingAccessTokenRequests = pendingAccessTokenRequestsRef.current;
              const accessTokenRequestResolvers = accessTokenRequestResolversRef.current;
          
              triggerPendingAccessTokenRequests(
                pendingAccessTokenRequests,
                accessTokenRequestResolvers
              );
            });
        }
      });
  };

  const strapiLogout = () => {
    localStorage.removeItem('strapiJwt');

    dispatch({ type: 'logoutSuccess' });
  };

  useEffect(() => {
    if (
      state.localState.loginStatus === 'request' &&
      state.localState.loginParams
    ) {
      strapiLogin(state.localState.loginParams);
    }
  }, [state.localState.loginStatus, dispatch]);

  useEffect(() => {
    if (
      state.localState.registerStatus === 'request' &&
      state.localState.registerParams
    ) {
      strapiRegister(state.localState.registerParams);
    }
  }, [
    state.localState.registerStatus,
    state.localState.registerParams,
    dispatch,
  ]);

  useEffect(() => {
    if (state.localState.logoutStatus === 'request') {
      strapiLogout();
    }
  }, [state.localState.logoutStatus, dispatch]);

  useEffect(() => {
    const jwt = localStorage.getItem('strapiJwt');

    if (jwt) {
      fetch(`${props.strapiUri}/api/users/me?populate=porrtal_roles`, {
        headers: { Authorization: `Bearer ${jwt}` },
      })
        .then((response) => response.json())
        .catch((err) => {
          console.log(`get user with jwt failed:`, JSON.stringify(err));
          dispatch({
            type: 'loginFailure',
            errorMessage: `get user with jwt failed: error ${err?.error?.status}: ${err?.error?.message}`,
          });
        })
        .then((res: StrapiUserMeResponse) => {
          console.log('strapi user/me response: ', res);

          dispatch({
            type: 'loginSuccess',
            user: {
              name: res.username,
              email: res.email,
            },
            claims: {
              ...(res as unknown as StateObject),
              jwt: jwt ?? '',
            },
          });

          const pendingAccessTokenRequests = pendingAccessTokenRequestsRef.current;
          const accessTokenRequestResolvers = accessTokenRequestResolversRef.current;
      
          triggerPendingAccessTokenRequests(
            pendingAccessTokenRequests,
            accessTokenRequestResolvers
          );
        });
    }
  }, []);

  const getToken = async (scopes: string[]) => {
    const scopeKey = 'scopes-not-used-for-strapi'; // JSON.stringify(scopes.sort());
    const pendingAccessTokenRequests = pendingAccessTokenRequestsRef.current;
    const accessTokenRequestResolvers = accessTokenRequestResolversRef.current;

    // Return cached token if it exists
    if (state.accessTokensByScopeKey[scopeKey]) {
      return state.accessTokensByScopeKey[scopeKey];
    }

    // If a request is already pending, return the existing promise
    if (pendingAccessTokenRequests[scopeKey]) {
      return pendingAccessTokenRequests[scopeKey];
    }

    // If authentication is not complete, queue the token request
    if (state.authN?.authNState !== 'authenticated') {
      if (!pendingAccessTokenRequests[scopeKey]) {
        pendingAccessTokenRequests[scopeKey] = new Promise<string>(
          (resolve, reject) => {
            // Queue up a function to call once authentication is complete
            accessTokenRequestResolvers[scopeKey] = {
              resolve,
              reject,
            };
          }
        );
      }
      return pendingAccessTokenRequests[scopeKey];
    }

    // No pending request, and authentication is complete, fetch the token
    const tokenPromise = fetchToken(state)
      .then((token) => {
        dispatch({
          type: 'fetchAccessTokenSuccess',
          accessToken: token,
          scopeKey,
        });
        console.log('fetchAccessTokenSuccess', { token, scopeKey });
        return token;
      })
      .catch((error) => {
        dispatch({ type: 'fetchAccessTokenFailure', scopeKey, error });
        console.error('Error fetching access token', error);
        throw error;
      })
      .finally(() => {
        // Once the request is completed, remove it from pending requests
        delete pendingAccessTokenRequests[scopeKey];
      });

    pendingAccessTokenRequests[scopeKey] = tokenPromise;
    return tokenPromise;
  };

  return (
    <AuthNContext.Provider value={state.authN}>
      <AuthNGetTokenContext.Provider value={getToken}>
        <AuthNDispatchContext.Provider value={dispatch}>
          <AuthZs>
            <StrapiAuthZ>{props.children}</StrapiAuthZ>
          </AuthZs>
        </AuthNDispatchContext.Provider>
      </AuthNGetTokenContext.Provider>
    </AuthNContext.Provider>
  );
}

const fetchToken = async (state: StrapiAuthNInfo) => {
  return Promise.resolve(state.authN?.claims?.jwt).then((response) => {
    console.log('fetchToken response', response);

    if (!response) {
      throw new Error('no jwt');
    }

    if (typeof response !== 'string') {
      throw new Error('jwt is not a string');
    }

    return response;
  });
};
