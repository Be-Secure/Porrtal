import { useDebouncedSearchText } from '@porrtal/r-shell';
import { ViewComponentProps } from '@porrtal/r-api';
import { accountData } from '../../data/account-data';
import styles from './account-search.module.scss';
import Moment from 'moment';
import { Fragment } from 'react';

export function AccountSearch(props: ViewComponentProps) {
  const searchText = useDebouncedSearchText();
  return (
    <div className={styles['container']}>
      <h3 className={styles['title']}>Account Search: {searchText}</h3>
      <div className={styles['data-container']}>
        {accountData
          .filter((account) => {
            return (
              JSON.stringify(account)
                .toLowerCase()
                .indexOf(searchText.toLowerCase()) >= 0
            );
          })
          .map((account) => (
            <Fragment key={account.accountId}>
              <div>{account.name}</div>
              <div className={styles['orders-data-container']}>
                {account?.orders.map((order) => (
                  <>
                    <span>{order.item}</span>
                    <span>
                      {'$' +
                        order.amount
                          .toFixed(0)
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                    </span>
                    <span>{Moment(order.date).format('YYYY-DD-MM')}</span>
                  </>
                ))}
              </div>
            </Fragment>
          ))}
      </div>
    </div>
  );
}

export default AccountSearch;
