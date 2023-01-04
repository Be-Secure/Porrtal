import { Component } from '@angular/core';
import { View } from '@porrtal/a-api';
import { BannerData, ShellStateService } from '@porrtal/a-shell';

const views: View[] = [
  {
    viewId: 'main-view',
    paneType: 'main',
    launchAtStartup: true,
    componentName: 'MainViewComponent',
    componentModule: () => import('./views/main-view/main-view.component'),
    key: 'main-view',
    displayText: 'main-view',
    displayIcon: 'home',
  },
  {
    viewId: 'nav-view',
    paneType: 'nav',
    launchAtStartup: true,
    componentName: 'NavViewComponent',
    componentModule: () => import('./views/nav-view/nav-view.component'),
    key: 'nav-view',
    displayText: 'nav-view',
    displayIcon: 'campaign',
  },
  {
    viewId: 'profile',
    paneType: 'right',
    launchAtStartup: true,
    componentName: 'ProfileComponent',
    componentModule: () => import('./views/profile/profile.component'),
    key: 'profile',
    displayText: 'profile',
    displayIcon: 'account_circle',
  },
  {
    viewId: 'v1',
    paneType: 'bottom',
    launchAtStartup: true,
    componentName: 'V1Component',
    componentModule: () => import('./views/v1/v1.component'),
    key: 'v1',
    displayText: 'v1',
    displayIcon: 'view_in_ar',
  },
  {
    viewId: 'v2',
    paneType: 'bottom',
    launchAtStartup: true,
    componentName: 'V2Component',
    componentModule: () => import('./views/v2/v2.component'),
    key: 'v2',
    displayText: 'v2',
    displayIcon: 'view_in_ar',
  },
  {
    viewId: 'v3',
    paneType: 'bottom',
    launchAtStartup: true,
    componentName: 'V3Component',
    componentModule: () => import('./views/v3/v3.component'),
    key: 'v3',
    displayText: 'v3',
    displayIcon: 'view_in_ar',
  },
  {
    viewId: 'v4',
    paneType: 'bottom',
    launchAtStartup: true,
    componentName: 'V4Component',
    componentModule: () => import('./views/v4/v4.component'),
    key: 'v4',
    displayText: 'v4',
    displayIcon: 'view_in_ar',
  },
];

@Component({
  selector: 'porrtal-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public bannerData: BannerData = {
    displayText: 'porrtal-auth - angular - auth0',
    displayIcon: 'cyclone',
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
