import { Auth0Authentication } from '@porrtal/user';
import {
  PorrtalShellDispatch,
  PorrtalShellState,
  ShellLayout,
  UsePorrtalShell,
  usePorrtalShell,
} from '@porrtal/shell';
import { Auth0Adapter } from '@porrtal/user';
import styles from './index.module.scss';
import { testPorrtalShellState } from './test-view-states';

export function Index() {
  const porrtalShell: UsePorrtalShell = usePorrtalShell(testPorrtalShellState);

  return (
    <Auth0Authentication
      domain="dev-b6h3bfnp.us.auth0.com"
      clientId="uP4eHSspiDjg6E7GKU5LjdFPn0WwEKTq"
      redirectUri="http://localhost:4200"
    >
      <PorrtalShellState.Provider value={porrtalShell.state}>
        <PorrtalShellDispatch.Provider value={porrtalShell.dispatch}>
          <div className={styles.page}>
            <ShellLayout />
          </div>
        </PorrtalShellDispatch.Provider>
      </PorrtalShellState.Provider>
    </Auth0Authentication>
  );
}

export default Index;
