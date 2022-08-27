import styles from './view-stack.module.scss';
import {
  Tab,
  Tabs,
  Icon,
  Menu,
  MenuItem,
  MenuDivider,
  Card,
  Button,
  IconName,
} from '@blueprintjs/core';
import { Dispatch, useEffect } from 'react';
import {
  ShellAction,
  useShellDispatch,
  ViewHost,
  ViewStackProps,
} from '@porrtal/r-shell';
import { ContextMenu2, Tooltip2 } from '@blueprintjs/popover2';
import {
  paneArrangements,
  PaneType,
  paneTypes,
  ViewState,
} from '@porrtal/r-api';

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
      return (
        <ViewStackTabsTop
          pane={props.pane}
          dispatch={dispatch}
          onClose={props.onClose}
        />
      );

    case 'tabs-left':
      return (
        <ViewStackTabsLeft
          pane={props.pane}
          dispatch={dispatch}
          onClose={props.onClose}
        />
      );

    case 'cards':
      return <ViewStackCards pane={props.pane} dispatch={dispatch} />;
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
      {props.onClose && (
        <>
          <Tabs.Expander />
          <Button
            onClick={(evt) => (props.onClose ? props.onClose(evt) : null)}
          >
            <Icon icon="cross" />
            <span>close</span>
          </Button>
        </>
      )}
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
      {props.onClose && (
        <>
          <Tabs.Expander />
          <Button
            onClick={(evt) => (props.onClose ? props.onClose(evt) : null)}
          >
            <Icon icon="cross" />
          </Button>
        </>
      )}
    </Tabs>
  );
}

function ViewStackCards(
  props: ViewStackProps & { dispatch: Dispatch<ShellAction> }
) {
  return (
    <div className={styles['card-container']}>
      <div className={styles['cards']}>
        {props.pane.viewStates.map((item) => (
          <Card id={item.key} key={item.key} className={`${styles['card']}`}>
            <Button
              className={
                item.key === props.pane.currentKey
                  ? styles['selected-card-button']
                  : ''
              }
              onClick={(evt) =>
                props.dispatch({
                  type: 'setCurrentViewStateByKey',
                  pane: props.pane,
                  key: item.key,
                })
              }
            >
              <ViewStackContextMenu
                pane={props.pane}
                dispatch={props.dispatch}
                item={item}
              ></ViewStackContextMenu>
            </Button>
            <div className={styles['viewHostContainer']}>
              <ViewHost key={item.key} viewState={item}></ViewHost>
            </div>
          </Card>
        ))}
      </div>
    </div>
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
          {props.pane.paneType !== 'search' && (
            <MenuItem
              key={`close`}
              icon={'cross'}
              text={`close tab`}
              onClick={(evt) => {
                props.dispatch({
                  type: 'deleteViewState',
                  key: props.item.key,
                });
                evt.stopPropagation();
              }}
            />
          )}
          {props.pane.paneType !== 'search' && <MenuDivider />}
          <MenuItem
            key={'arrange'}
            text="Arrange tabs..."
            icon="column-layout"
            intent="primary"
          >
            {paneArrangements.map((paneArrangement) => (
              <MenuItem
                key={`arrange-${paneArrangement}`}
                icon={
                  (props.pane.arrange === paneArrangement
                    ? 'tick'
                    : '') as IconName
                }
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
          {props.pane.paneType !== 'search' && (
            <MenuItem
              key={'move'}
              text="Move to..."
              icon="move"
              intent="primary"
            >
              {paneTypes
                .filter(
                  (paneType) =>
                    paneType !== 'search' && paneType !== props.pane.paneType
                )
                .map((paneType) => (
                  <MenuItem
                    key={`move-to-${paneType}`}
                    icon={moveIcons[paneType] as IconName}
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
          )}
        </Menu>
      }
    >
      {props.pane.arrange !== 'tabs-left' && (
        <span>
          {props.item.displayIcon && (
            <Icon
              style={{ marginLeft: '3px', marginRight: '3px' }}
              icon={props.item.displayIcon as IconName}
            />
          )}
          <span>{props.item.displayText}</span>
          {props.pane.paneType !== 'search' && (
            <Icon
              style={{ marginLeft: '5px' }}
              icon="cross"
              onClick={(evt) => {
                props.dispatch({
                  type: 'deleteViewState',
                  key: props.item.key,
                });
                evt.stopPropagation();
              }}
            />
          )}
        </span>
      )}
      {props.pane.arrange === 'tabs-left' && (
        <Tooltip2 content={props.item.displayText}>
          <span>
            <Icon icon={props.item.displayIcon as IconName} />
          </span>
        </Tooltip2>
      )}
    </ContextMenu2>
  );
}
