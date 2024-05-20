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
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Main1Component } from './main1.component';

describe('Main1Component', () => {
  let component: Main1Component;
  let fixture: ComponentFixture<Main1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Main1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Main1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
