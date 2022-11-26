import { Icon } from '@mui/material';
import { useEffect } from 'react';
import { useShellDispatch } from '@porrtal/r-shell';
import styles from './docs-nav.module.scss';
import { docsNavViews } from './docs-nav-views';

/* eslint-disable-next-line */
export interface DocsNavProps {}

export function DocsNav(props: DocsNavProps) {
  const shellDispatch = useShellDispatch();
  useEffect(() => {
    if (shellDispatch) {
      docsNavViews.forEach((v) => {
        shellDispatch({
          type: 'registerView',
          view: v,
        });
      });

      shellDispatch({
        type: 'launchView',
        viewId: 'Welcome',
      });
    }
  }, [shellDispatch]);

  return (
    <div className={styles['container']}>
      <h3 className={styles['title']}>Quick Start Docs</h3>
      <div className={styles['data-container']}>
        {/* Welcome */}
        <h4
          className={styles['link-button']}
          onClick={() =>
            shellDispatch({
              type: 'launchView',
              viewId: 'Welcome',
            })
          }
        >
          <Icon>auto_awesome</Icon>
          <span style={{ marginLeft: '5px' }}>Welcome !!</span>
        </h4>

        {/* Setup Your Workstation */}
        <h4
          className={styles['link-button']}
          onClick={() =>
            shellDispatch({
              type: 'launchView',
              viewId: 'Setup Your Workstation',
            })
          }
        >
          <Icon>auto_awesome</Icon>
          <span style={{ marginLeft: '5px' }}>Setup Your Workstation</span>
        </h4>

        {/* Create the App */}
        <h4
          className={styles['link-button']}
          onClick={() =>
            shellDispatch({
              type: 'launchView',
              viewId: 'Create the App',
            })
          }
        >
          <Icon>auto_awesome</Icon>
          <span style={{ marginLeft: '5px' }}>Create the App</span>
        </h4>

        {/* Create the Nav Component */}
        <h4
          className={styles['link-button']}
          onClick={() =>
            shellDispatch({
              type: 'launchView',
              viewId: 'Create the Nav Component',
            })
          }
        >
          <Icon>auto_awesome</Icon>
          <span style={{ marginLeft: '5px' }}>Create the Nav Component</span>
        </h4>

        {/* Launch a Component */}
        <h4
          className={styles['link-button']}
          onClick={() =>
            shellDispatch({
              type: 'launchView',
              viewId: 'Launch a Component',
            })
          }
        >
          <Icon>auto_awesome</Icon>
          <span style={{ marginLeft: '5px' }}>Launch a Component</span>
        </h4>

        {/* Create an Entity Menu */}
        <h4
          className={styles['link-button']}
          onClick={() =>
            shellDispatch({
              type: 'launchView',
              viewId: 'Create an Entity Menu',
            })
          }
        >
          <Icon>auto_awesome</Icon>
          <span style={{ marginLeft: '5px' }}>Create an Entity Menu</span>
        </h4>

        {/* Create a Search Component */}
        <h4
          className={styles['link-button']}
          onClick={() =>
            shellDispatch({
              type: 'launchView',
              viewId: 'Create a Search Component',
            })
          }
        >
          <Icon>auto_awesome</Icon>
          <span style={{ marginLeft: '5px' }}>Create a Search Component</span>
        </h4>

        {/* Next Steps */}
        <h4
          className={styles['link-button']}
          onClick={() =>
            shellDispatch({
              type: 'launchView',
              viewId: 'Next Steps',
            })
          }
        >
          <Icon>auto_awesome</Icon>
          <span style={{ marginLeft: '5px' }}>Next Steps</span>
        </h4>
      </div>
    </div>
  );
}

export default DocsNav;
