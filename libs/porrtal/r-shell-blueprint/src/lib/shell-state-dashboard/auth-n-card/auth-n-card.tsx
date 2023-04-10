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
import styles from './auth-n-card.module.scss';
import { CardContainerProps } from '@porrtal/r-shell';

export function AuthNCard(props: CardContainerProps) {
  return (
    <div className={styles['card-layout']}>
      <div className={styles['card-header']}>auth-n</div>
      <div className={styles['card-content-container']}>
        <pre>{JSON.stringify(props.card.data, null, 2)}</pre>
      </div>
    </div>
  );
}

export default AuthNCard;
