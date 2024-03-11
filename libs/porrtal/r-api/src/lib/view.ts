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
import { PaneType } from './pane';
import { ViewLaunch } from './view-launch';
import { StateObject } from './view-state';

export interface View {
  viewId?: string;
  launchAtStartup?: boolean;
  paneType?: PaneType;

  componentName: string;
  componentModule: string | (() => Promise<Record<string, unknown>>);

  key?: string;
  displayText: string;
  entityTypeMenuText?: string;
  displayIcon?: string;

  state?: StateObject;

  entityType?: string;

  permissions?: string;

  menu?: string;

  userInfo?: ViewLaunch[];
  devInfo?: ViewLaunch[];
}
