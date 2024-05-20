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
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { View } from '@porrtal/a-api';
import { BannerData, ShellStateService } from '@porrtal/a-shell';
import { ShellLayoutComponent } from '@porrtal/a-shell-material';

const views: View[] = [
  {
    viewId: 'main-view',
    paneType: 'main',
    launchAtStartup: true,
    componentName: 'MainViewComponent',
    componentModule: () => import('../../views/main-view/main-view.component'),
    key: 'main-view',
    displayText: 'main-view',
    displayIcon: 'home',
  },
  {
    viewId: 'nav-view',
    paneType: 'nav',
    launchAtStartup: true,
    componentName: 'NavViewComponent',
    componentModule: () => import('../../views/nav-view/nav-view.component'),
    key: 'nav-view',
    displayText: 'nav-view',
    displayIcon: 'campaign',
  },
  {
    viewId: 'profile',
    paneType: 'right',
    launchAtStartup: true,
    componentName: 'ProfileComponent',
    componentModule: () => import('../../views/profile/profile.component'),
    key: 'profile',
    displayText: 'profile',
    displayIcon: 'account_circle',
    permissions: 'no-parent:no-role'
  },
  {
    viewId: 'v1',
    paneType: 'bottom',
    launchAtStartup: true,
    componentName: 'V1Component',
    componentModule: () => import('../../views/v1/v1.component'),
    key: 'v1',
    displayText: 'v1',
    displayIcon: 'view_in_ar',
    permissions: 'primary:admin',
  },
  {
    viewId: 'v2',
    paneType: 'bottom',
    launchAtStartup: false,
    componentName: 'V2Component',
    componentModule: () => import('../../views/v2/v2.component'),
    key: 'v2',
    displayText: 'v2',
    displayIcon: 'view_in_ar',
    entityType: 'account',
    permissions: 'primary:public',
  },
  {
    viewId: 'v3',
    paneType: 'bottom',
    launchAtStartup: true,
    componentName: 'V3Component',
    componentModule: () => import('../../views/v3/v3.component'),
    key: 'v3',
    displayText: 'v3',
    displayIcon: 'view_in_ar',
    permissions: 'primary:role-not-granted',
  },
  {
    viewId: 'v4',
    paneType: 'bottom',
    launchAtStartup: true,
    componentName: 'V4Component',
    componentModule: () => import('../../views/v4/v4.component'),
    key: 'v4',
    displayText: 'v4',
    displayIcon: 'view_in_ar',
    permissions: 'primary:public',
  },
];

@Component({
  selector: 'porrtal-workspace-page-one',
  standalone: true,
  imports: [CommonModule, ShellLayoutComponent],
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageOneComponent {
  public bannerData: BannerData = {
    displayText: 'porrtal-auth - angular - msal',
    displayIcon: 'cyclone',
    childData: [
      {
        displayText: 'one',
        targetUrl: '/one'
      },
      {
        displayText: 'two',
        targetUrl: '/two'
      }
    ]
  };

  constructor(public shellStateService: ShellStateService) {
    views.forEach((view) =>
      shellStateService.dispatch({
        type: 'registerView',
        view,
      })
    );

    shellStateService.dispatch({
      type: 'launchStartupViews',
    });
  }
}
