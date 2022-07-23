import { ReactNode } from 'react';
import { useShellComponents } from '../shell-components';
// import { useShellState } from '../shell-state/shell-state';

export interface EntityMenuProps {
  entityType: string;
  children: ReactNode | undefined;
}

export type EntityMenuComponent = (props: EntityMenuProps) => JSX.Element;

export function EntityMenu(props: EntityMenuProps) {
  const shellComponents = useShellComponents();
  // const shellState = useShellState();

  if (shellComponents && typeof window !== 'undefined' && window) {
    return (
      <shellComponents.EntityMenu entityType="account">
        {props.children}
      </shellComponents.EntityMenu>
    );
  } else {
    return <div></div>;
  }
}

export default EntityMenu;
