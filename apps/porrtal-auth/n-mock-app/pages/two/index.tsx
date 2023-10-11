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
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';

import { View } from '@porrtal/r-api';
import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import Head from 'next/head';
import { ShellState } from '@porrtal/r-shell';
import { MockAuthentication, MockAuthZ } from '@porrtal/r-user-mock';
import { ShellBlueprint } from '@porrtal/r-shell-blueprint';

/* eslint-disable-next-line */
export interface TwoProps {}

export function Two(props: TwoProps) {

  const views: View[] = [
    {
      viewId: 'main-view',
      paneType: 'main',
      launchAtStartup: true,
      componentName: 'MainView',
      componentModule: () => import('../../views/main-view/main-view'),
      key: 'main-view',
      displayText: 'main-view',
      displayIcon: 'home',
    },
    {
      viewId: 'nav-view',
      paneType: 'nav',
      launchAtStartup: true,
      componentName: 'NavView',
      componentModule: () => import('../../views/nav-view/nav-view'),
      key: 'nav-view',
      displayText: 'nav-view',
      displayIcon: 'feed',
    },
    {
      viewId: 'profile',
      paneType: 'right',
      launchAtStartup: true,
      componentName: 'Profile',
      componentModule: () => import('../../views/profile/profile'),
      key: 'profile',
      displayText: 'profile',
      displayIcon: 'user',
    },
    {
      viewId: 'v1',
      paneType: 'bottom',
      launchAtStartup: true,
      componentName: 'V1',
      componentModule: () => import('../../views/v1/v1'),
      key: 'v1',
      permissions: 'second:role1',
      displayText: 'v1',
      displayIcon: 'cube',
    },
    {
      viewId: 'v2',
      paneType: 'bottom',
      launchAtStartup: true,
      componentName: 'V2',
      componentModule: () => import('../../views/v2/v2'),
      key: 'v2',
      permissions: 'primary:role1',
      displayText: 'v2',
      displayIcon: 'cube',
    },
    {
      viewId: 'v3',
      paneType: 'bottom',
      launchAtStartup: true,
      componentName: 'V3',
      componentModule: () => import('../../views/v3/v3'),
      key: 'v3',
      permissions: 'second:role6',
      entityType: 'account',
      displayText: 'v3',
      displayIcon: 'cube',
    },
    {
      viewId: 'v4',
      paneType: 'bottom',
      launchAtStartup: true,
      componentName: 'V4',
      componentModule: () => import('../../views/v4/v4'),
      key: 'v4',
      permissions: 'orphan-auth-z:no-role',
      displayText: 'v4',
      displayIcon: 'cube',
    },
    {
      viewId: 'shell-state-dashboard',
      paneType: 'bottom',
      launchAtStartup: false,
      componentName: 'ShellStateDashboard',
      componentModule: () => import('@porrtal/r-shell-blueprint'),
      key: 'shell-state-dashboard',
      displayText: 'Shell State Dashboard',
      displayIcon: 'key',
    },
  ];

  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (!isSSR) {
    return (
      <>
        <Head>
          <title>@porrtal - porrtal-auth - n-auth0-app (material)</title>
        </Head>

        <ShellState views={views}>
          <MockAuthentication
            authN={{
              loginAtStartup: true,
              loginDelay: 3000,
              errorMessage: 'silly error in auth n...',
            }}
          >
            <MockAuthZ
              name="primary"
              config={{
                fetchDelay: 3000,
                shouldFail: true,
                errorInfo: { message: 'silly configuration error...' },
              }}
            >
              <MockAuthZ
                name="second"
                config={{
                  fetchDelay: 5000,
                  shouldFail: false,
                  scopes: ['scope1', 'scope2', 'scope3'],
                  warningInfo: {
                    message: 'it is probably ok, but you should know...',
                  },
                  props: {
                    one: 1,
                    two: 2,
                    sub: {
                      sub_one: 1.1,
                    },
                  },
                  roles: ['role1', 'role2'],
                  pendingViews: [
                    {
                      type: 'startup',
                      viewId: 'v2',
                      state: { someProperty: 'some value...' },
                    },
                    {
                      type: 'deep-link',
                      viewId: 'v3',
                      state: { anotherProperty: 'another value...' },
                    },
                  ],
                }}
              >
                <ShellBlueprint
                  bannerData={{
                    displayText: 'porrtal-auth - nextjs - mock (blueprint)',
                    displayIcon: 'cyclone',
                  }}
                />
              </MockAuthZ>
            </MockAuthZ>
          </MockAuthentication>
        </ShellState>
      </>
    );
  }

  return <div>loading...</div>;
}

export default Two;
