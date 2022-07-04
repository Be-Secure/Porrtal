import { Box, Icon, Tab, Tabs } from '@mui/material';
import React, { Dispatch, useMemo } from 'react';
import {
  ShellAction,
  useShellDispatch,
  ViewHost,
  ViewStackProps,
} from '@porrtal/shell';
import styles from './view-stack.module.scss';
import { ContextMenu, NestedMenuItem, IconMenuItem } from 'mui-nested-menu';
import { paneArrangements, PaneType, paneTypes, ViewState } from '@porrtal/api';

export function ViewStack(props: ViewStackProps) {
  const dispatch = useShellDispatch();
  const currentIndex = useMemo(() => {
    for (let ii = 0; ii < props.pane.viewStates.length; ii++) {
      if (props.pane.viewStates[ii].key === props.pane.currentKey) {
        return ii;
      }
    }
    return -1;
  }, [props.pane]);

  const handleChange = (event: React.SyntheticEvent, newIndex: number) => {
    dispatch({
      type: 'setCurrentViewStateByKey',
      key: props.pane.viewStates[newIndex].key,
      pane: props.pane,
    });
  };

  switch (props.pane.arrange) {
    case 'tabs-top':
      return (
        <ViewStackTabsTop
          pane={props.pane}
          currentIndex={currentIndex}
          dispatch={dispatch}
          handleChange={handleChange}
        />
      );

    case 'tabs-left':
      return (
        <ViewStackTabsTop
          pane={props.pane}
          currentIndex={currentIndex}
          dispatch={dispatch}
          handleChange={handleChange}
        />
      );
  }

  return (
    <div>ViewStack Arrangement ('{props.pane.arrange}') Not Supported.</div>
  );
}

function ViewStackTabsTop(
  props: ViewStackProps & {
    dispatch: Dispatch<ShellAction>;
    currentIndex: number;
    handleChange: (event: React.SyntheticEvent, newIndex: number) => void;
  }
) {
  return (
    <div className={styles['container']}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          backgroundColor: 'gainsboro',
        }}
      >
        <Tabs
          value={props.currentIndex}
          variant="scrollable"
          scrollButtons="auto"
          onChange={props.handleChange}
          className={styles['tabs']}
        >
          {props.pane.viewStates.map((item, index) => (
            <Tab
              key={item.key}
              icon={
                <Icon style={{ position: 'relative', top: '3px' }}>
                  {item.displayIcon}
                </Icon>
              }
              iconPosition="start"
              label={
                <ViewStackContextMenu
                  pane={props.pane}
                  dispatch={props.dispatch}
                  item={item}
                ></ViewStackContextMenu>
              }
            ></Tab>
          ))}
        </Tabs>
      </Box>
      <div className={styles['view-host-container']}>
        {props.pane.viewStates.map((item, index) => (
          <ViewHost
            key={item.key}
            viewState={item}
            zIndex={index === props.currentIndex ? 10 : 0}
          ></ViewHost>
        ))}
        <div
          style={{
            zIndex: 5,
            backgroundColor: 'white',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
        ></div>
      </div>
    </div>
  );
}

function ViewStackTabsLeft(
  props: ViewStackProps & {
    dispatch: Dispatch<ShellAction>;
    currentIndex: number;
    handleChange: (event: React.SyntheticEvent, newIndex: number) => void;
  }
) {
  return (
    <div className={styles['container']}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          backgroundColor: 'gainsboro',
        }}
      >
        <Tabs
          value={props.currentIndex}
          variant="scrollable"
          scrollButtons="auto"
          onChange={props.handleChange}
          className={styles['tabs']}
        >
          {props.pane.viewStates.map((item, index) => (
            <Tab
              key={item.key}
              icon={
                <Icon style={{ position: 'relative', top: '3px' }}>
                  {item.displayIcon}
                </Icon>
              }
              iconPosition="start"
              label={
                <ViewStackContextMenu
                  pane={props.pane}
                  dispatch={props.dispatch}
                  item={item}
                ></ViewStackContextMenu>
              }
            ></Tab>
          ))}
        </Tabs>
      </Box>
      <div className={styles['view-host-container']}>
        {props.pane.viewStates.map((item, index) => (
          <ViewHost
            key={item.key}
            viewState={item}
            zIndex={index === props.currentIndex ? 10 : 0}
          ></ViewHost>
        ))}
        <div
          style={{
            zIndex: 5,
            backgroundColor: 'white',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
        ></div>
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
    nav: 'arrow_circle_left_outlined',
    main: 'arrow_circle_up_outlined',
    bottom: 'arrow_circle_down_outlined',
    right: 'arrow_circle_right_outlined',
    search: 'clear',
  };

  return (
    <ContextMenu
      menuItems={[
        <NestedMenuItem
          key={'arrange'}
          leftIcon={<Icon>pivot_table_chart</Icon>}
          parentMenuOpen={true}
          label={'Arrange...'}
        >
          {paneArrangements.map((paneArrangement) => (
            <IconMenuItem
              key={`arrange-${paneArrangement}`}
              leftIcon={
                <Icon className="material-icons-outlined">
                  {props.pane.arrange === paneArrangement ? 'done' : ''}
                </Icon>
              }
              label={`${paneArrangement}`}
              onClick={() =>
                props.dispatch({
                  type: 'arrangePane',
                  pane: props.pane,
                  paneArrangement,
                })
              }
            ></IconMenuItem>
          ))}
        </NestedMenuItem>,
        <NestedMenuItem
          key={'move'}
          leftIcon={<Icon>open_with</Icon>}
          parentMenuOpen={true}
          label={'Move to...'}
        >
          {paneTypes
            .filter(
              (paneType) =>
                paneType !== 'search' && paneType !== props.pane.paneType
            )
            .map((paneType) => (
              <IconMenuItem
                key={`move-to-${paneType}`}
                leftIcon={
                  <Icon className="material-icons-outlined">
                    {moveIcons[paneType]}
                  </Icon>
                }
                label={`${paneType} pane`}
                onClick={() =>
                  props.dispatch({
                    type: 'moveView',
                    key: props.item.key,
                    toPane: paneType,
                  })
                }
              ></IconMenuItem>
            ))}
        </NestedMenuItem>,
      ]}
    >
      <span>
        {props.item.displayText}&nbsp;
        <Icon
          style={{ position: 'relative', top: '5px' }}
          onClick={(evt) => {
            props.dispatch({ type: 'deleteViewState', key: props.item.key });
            evt.stopPropagation();
          }}
        >
          clear
        </Icon>
      </span>
    </ContextMenu>
  );
}
