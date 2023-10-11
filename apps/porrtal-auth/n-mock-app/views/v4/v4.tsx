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
import styles from './v4.module.scss';

/* eslint-disable-next-line */
export interface V4Props {}

export function V4(props: V4Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to V4!</h1>
    </div>
  );
}

export default V4;
