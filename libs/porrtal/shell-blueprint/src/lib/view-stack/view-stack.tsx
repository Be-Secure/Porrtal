import styles from './view-stack.module.scss';
import {
  Tab,
  Tabs,
  Icon,
  Menu,
  MenuItem,
  MenuDivider,
} from '@blueprintjs/core';
import { Dispatch, useEffect } from 'react';
import {
  ShellAction,
  useShellDispatch,
  ViewHost,
  ViewStackProps,
} from '@porrtal/shell';
import { ContextMenu2, Tooltip2 } from '@blueprintjs/popover2';
import { paneArrangements, PaneType, paneTypes, ViewState } from '@porrtal/api';

export function ViewStack(props: ViewStackProps) {
  const dispatch = useShellDispatch();
  useEffect(() => {
    if (!props.pane.currentKey && props?.pane?.viewStates?.length && dispatch) {
      dispatch({
        type: 'setCurrentViewStateByKey',
        pane: props.pane,
        key: props.pane.viewStates[0].key,
      });
    }
  }, [props.pane, dispatch]);

  switch (props.pane.arrange) {
    case 'tabs-top':
      return <ViewStackTabsTop pane={props.pane} dispatch={dispatch} />;

    case 'tabs-left':
      return <ViewStackTabsLeft pane={props.pane} dispatch={dispatch} />;
  }

  return (
    <div>ViewStack Arrangement ('{props.pane.arrange}') Not Supported.</div>
  );
}

function ViewStackTabsTop(
  props: ViewStackProps & { dispatch: Dispatch<ShellAction> }
) {
  return (
    <Tabs
      animate={true}
      id="ViewStack"
      key={'horizontal'}
      renderActiveTabPanelOnly={false}
      vertical={false}
      onChange={(evt) =>
        props.dispatch({
          type: 'setCurrentViewStateByKey',
          pane: props.pane,
          key: evt.toLocaleString(),
        })
      }
      selectedTabId={props.pane.currentKey}
      className={`${styles['tabs']} ${styles['tabs-top']}`}
    >
      {props.pane.viewStates.map((item) => (
        <Tab
          id={item.key}
          key={item.key}
          title={
            <ViewStackContextMenu
              pane={props.pane}
              dispatch={props.dispatch}
              item={item}
            ></ViewStackContextMenu>
          }
          panel={
            <div className={styles['viewHostContainer']}>
              <ViewHost key={item.key} viewState={item}></ViewHost>
            </div>
          }
          className={styles['tab']}
        />
      ))}
      <Tabs.Expander />
    </Tabs>
  );
}

function ViewStackTabsLeft(
  props: ViewStackProps & { dispatch: Dispatch<ShellAction> }
) {
  return (
    <Tabs
      animate={true}
      id="ViewStack"
      key={'horizontal'}
      renderActiveTabPanelOnly={false}
      vertical={true}
      onChange={(evt) =>
        props.dispatch({
          type: 'setCurrentViewStateByKey',
          pane: props.pane,
          key: evt.toLocaleString(),
        })
      }
      selectedTabId={props.pane.currentKey}
      className={`${styles['tabs']} ${styles['tabs-left']}`}
    >
      {props.pane.viewStates.map((item) => (
        <Tab
          id={item.key}
          key={item.key}
          title={
            <ViewStackContextMenu
              pane={props.pane}
              dispatch={props.dispatch}
              item={item}
            ></ViewStackContextMenu>
          }
          panel={
            <div className={styles['viewHostContainer']}>
              <ViewHost key={item.key} viewState={item}></ViewHost>
            </div>
          }
          className={styles['tab']}
        />
      ))}
      <Tabs.Expander />
    </Tabs>
  );
}

export default ViewStack;

function ViewStackContextMenu(
  props: ViewStackProps & { dispatch: Dispatch<ShellAction> } & {
    item: ViewState;
  }
) {
  const moveIcons: { [key in PaneType]: string } = {
    nav: 'arrow-left',
    main: 'arrow-up',
    bottom: 'arrow-down',
    right: 'arrow-right',
    search: 'clear',
  };

  return (
    <ContextMenu2
      content={
        <Menu>
          <MenuItem
            key={`close`}
            icon={'delete'}
            text={`close tab`}
            onClick={(evt) => {
              props.dispatch({ type: 'deleteViewState', key: props.item.key });
              evt.stopPropagation();
            }}
          />
          <MenuDivider />
          <MenuItem
            key={'arrange'}
            text="Arrange tabs..."
            icon="column-layout"
            intent="primary"
          >
            {paneArrangements.map((paneArrangement) => (
              <MenuItem
                key={`arrange-${paneArrangement}`}
                icon={props.pane.arrange === paneArrangement ? 'tick' : ''}
                text={`${paneArrangement}`}
                onClick={() =>
                  props.dispatch({
                    type: 'arrangePane',
                    pane: props.pane,
                    paneArrangement,
                  })
                }
              />
            ))}
          </MenuItem>
          <MenuItem key={'move'} text="Move to..." icon="move" intent="primary">
            {paneTypes
              .filter(
                (paneType) =>
                  paneType !== 'search' && paneType !== props.pane.paneType
              )
              .map((paneType) => (
                <MenuItem
                  key={`move-to-${paneType}`}
                  icon={moveIcons[paneType]}
                  text={`${paneType} pane`}
                  onClick={() =>
                    props.dispatch({
                      type: 'moveView',
                      key: props.item.key,
                      toPane: paneType,
                    })
                  }
                />
              ))}
          </MenuItem>
        </Menu>
      }
    >
      {props.pane.arrange !== 'tabs-left' && (
        <span>
          &nbsp;
          <Icon icon={props.item.displayIcon} />
          &nbsp;{props.item.displayText}&nbsp;
          <Icon
            icon="delete"
            onClick={(evt) => {
              props.dispatch({ type: 'deleteViewState', key: props.item.key });
              evt.stopPropagation();
            }}
          />
        </span>
      )}
      {props.pane.arrange === 'tabs-left' && (
        <Tooltip2 content={props.item.displayText}>
          <span>
            <Icon icon={props.item.displayIcon} />
          </span>
        </Tooltip2>
      )}
    </ContextMenu2>
  );
}
