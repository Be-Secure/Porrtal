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
import { Icon } from '@mui/material';
import { EntityMenu, useShellDispatch } from '@porrtal/r-shell';
import { Fragment, useEffect, useState } from 'react';
import { AccountData, fetchAccountData } from '../../data/account-data';
import styles from './account-nav.module.scss';

/* eslint-disable-next-line */
export interface AccountNavProps {}

export function AccountNav(props: AccountNavProps) {
  const [accountData, setAccountData] = useState<AccountData>();
  useEffect(() => {
    fetchAccountData(0).then((d) => setAccountData(d));
  }, []);
  const shellDispatch = useShellDispatch();
  return (
    <div className={styles['container']}>
      <h3 className={styles['title']}>Top Three Accounts</h3>
      <div className={styles['new-account-container']}>
        <p
          className={styles['link-button']}
          onClick={() =>
            shellDispatch({ type: "launchView", viewId: "NewAccount" })
          }
        >
          <Icon>add_circle</Icon>
          <span style={{ marginLeft: "5px" }}>New Account</span>
        </p>
      </div>
      <div className={styles['data-container']}>
        {accountData &&
          accountData
            .map((account) => {
              const total = account?.orders.reduce((accumulator, order) => {
                return accumulator + order.amount;
              }, 0);
              return {
                ...account,
                total,
              };
            })
            .sort((a, b) => b.total - a.total)
            .filter((acct, ii) => ii < 3)
            .map((acct) => {
              return (
                <Fragment key={acct.accountId}>
                  <EntityMenu
                    entityType="account"
                    state={{ accountId: acct.accountId }}
                  >
                    <span className={styles['link-button']}>
                      <Icon>account_box</Icon>
                      <span style={{ marginLeft: '5px' }}>{acct.name}</span>
                    </span>
                  </EntityMenu>
                  <span>
                    {'$' +
                      acct.total
                        .toFixed(0)
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                  </span>
                </Fragment>
              );
            })}
        {!accountData && <div>loading data...</div>}
      </div>
    </div>
  );
}

export default AccountNav;
