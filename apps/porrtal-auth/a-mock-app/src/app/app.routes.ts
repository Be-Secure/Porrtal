﻿/*
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
import { Route } from '@angular/router';
import { PageFiveComponent } from './pages/page-five/page-five.component';
import { PageFourComponent } from './pages/page-four/page-four.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageSevenComponent } from './pages/page-seven/page-seven.component';
import { PageSixComponent } from './pages/page-six/page-six.component';
import { PageThreeComponent } from './pages/page-three/page-three.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';

export const appRoutes: Route[] = [
    {
        path: 'one',
        component: PageOneComponent
    },
    {
        path: 'two',
        component: PageTwoComponent
    },
    {
        path: 'three',
        component: PageThreeComponent
    },
    {
        path: 'four',
        component: PageFourComponent
    },
    {
        path: 'five',
        component: PageFiveComponent
    },
    {
        path: 'six',
        component: PageSixComponent
    },
    {
        path: 'seve ',
        component: PageSevenComponent
    },
    {
        path: '**',
        redirectTo: 'one'
    }
];
