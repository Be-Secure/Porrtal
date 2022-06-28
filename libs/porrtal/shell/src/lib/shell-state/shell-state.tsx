import {
  ViewComponentFunction,
  ViewState,
  Panes,
  PaneType,
  Pane,
  paneTypes,
} from '@porrtal/api';
import {
  useReducer,
  Reducer,
  Dispatch,
  createContext,
  useContext,
  useMemo,
} from 'react';

export type ComponentFactoryDictionary = {
  [componentName: string]: ViewComponentFunction;
};

export interface UseShellState {
  panes: Panes;
  components: ComponentFactoryDictionary;
}

export type ShellAction =
  | { type: 'launchViewState'; viewState: ViewState }
  | { type: 'deleteViewState'; key: string }
  | { type: 'setCurrentViewStateByKey'; key: string, pane: Pane }
  | {
      type: 'registerComponent';
      componentRegistration: {
        componentName: string;
        viewComponentFunction: ViewComponentFunction;
      };
    };

const reducer: Reducer<UseShellState, ShellAction> = (state, action) => {
  console.log('reducer', state, action);
  switch (action.type) {
    case 'launchViewState': {

      let retState: UseShellState = state;

      // see if the key exists already (replace it if so)
      if (paneTypes.some(paneType => {
        const ii = state.panes[paneType].viewStates.findIndex(vs => vs.key === action.viewState.key);
        if (ii >= 0) {
          action.viewState.componentImport = state.components[action.viewState.componentName];
          const newArray = [...state.panes[paneType].viewStates];
          newArray.splice(ii, 1, action.viewState);
          retState = {
            ...state,
            panes: {
              ...state.panes,
              [paneType]: {
                currentKey: action.viewState.key,
                viewStates: newArray,
                paneType
              }
            }
          }
          return true;
        }
        return false;
      })) {
        return retState;
      }

      // key didn't exist so add the view state to the requested pane
      const viewStates = state.panes[action.viewState.paneType].viewStates;
      const viewState = action.viewState;
      viewState.componentImport = state.components[viewState.componentName];
      retState = {
        ...state,
        panes: {
          ...state.panes,
          [action.viewState.paneType]: {
            currentKey: action.viewState.key,
            viewStates: [
              ...viewStates,
              viewState
            ],
            paneType: action.viewState.paneType
          },
        },
      };
      return retState;
    }

    case 'setCurrentViewStateByKey': {
      const paneType = Object.keys(state.panes).find(key => state.panes[key as PaneType] === action.pane);
      if (!paneType) {
        return state;
      }
      return {
        ...state,
        panes: {
          ...state.panes,
          [paneType]: {
            ...action.pane,
            currentKey: action.key,
            paneType
          }
        }
      }
    }

    case 'deleteViewState': {
      const target = {};
      Object.assign(
        target,
        ...Object.keys(state.panes).map((paneType: string) => ({
          [paneType]: {
            ...state.panes[paneType as PaneType],
            viewStates: state.panes[paneType as PaneType].viewStates.filter(
              (item) => item.key !== action.key
            ),
            currentKey: computeCurrentKey(state, paneType, action),
            paneType
          },
        }))
      );

      const retState: UseShellState = {
        ...state,
        panes: target as Panes,
      };
      return retState;
    }

    case 'registerComponent':
      return {
        ...state,
        components: {
          ...state.components,
          [action.componentRegistration.componentName]:
            action.componentRegistration.viewComponentFunction,
        },
      };
  }
  return state;
};

function computeCurrentKey(state: UseShellState, paneType: string, action: { type: 'deleteViewState'; key: string; }): string {
  // if we aren't deleting the current one, keep the current one the same
  if (state.panes[paneType as PaneType].currentKey !== action.key) {
    return state.panes[paneType as PaneType].currentKey
  }

  // find the one that we are supposed to delete
  const vsWithKey = state.panes[paneType as PaneType].viewStates.find(
    (item) => item.key === action.key
  );

  // if we don't find one to delete that matches the key and the current is the key we didn't find
  if (!vsWithKey) {
    // if there are none in the array, set the current to nothing
    if (state.panes[paneType as PaneType].viewStates.length < 1) {
      return '';
    }

    // there are some in the array, set the current one to the first element
    return state.panes[paneType as PaneType].viewStates[0].key;
  }

  // if the one we are deleting is the only one, set the current to nothing
  if (vsWithKey && state.panes[paneType as PaneType].viewStates.length === 1) {
    return '';
  }

  let vsIndex = state.panes[paneType as PaneType].viewStates.indexOf(vsWithKey);
  if (vsIndex === state.panes[paneType as PaneType].viewStates.length - 1) {
    vsIndex--;
  } else {
    vsIndex++;
  }

  return state.panes[paneType as PaneType].viewStates[vsIndex].key
}

const emptyUseShellState: UseShellState = {
  panes: {
    nav: {
      viewStates: [] as ViewState[],
      arrange: 'tabs-top',
      currentKey: '',
      paneType: 'nav'
    },
    main: {
      viewStates: [] as ViewState[],
      arrange: 'tabs-top',
      currentKey: '',
      paneType: 'main'
    },
    bottom: {
      viewStates: [] as ViewState[],
      arrange: 'tabs-top',
      currentKey: '',
      paneType: 'bottom'
    },
    right: {
      viewStates: [] as ViewState[],
      arrange: 'tabs-top',
      currentKey: '',
      paneType: 'right'
    },
    search: {
      viewStates: [] as ViewState[],
      arrange: 'tabs-top',
      currentKey: '',
      paneType: 'search'
    },
  },
  components: {},
};

// arg to createContext is used if no provider is defined https://stackoverflow.com/q/49949099/7085047
const ShellStateContext = createContext<UseShellState>(emptyUseShellState);

// arg to createContext is used if no provider is defined https://stackoverflow.com/q/49949099/7085047
const ShellDispatchContext = createContext<Dispatch<ShellAction>>(
  (value: ShellAction) => {
    return;
  }
);

export interface ShellStateProps {
  views?: ViewState[];
  components: ComponentFactoryDictionary;
  children?: React.ReactChild | React.ReactChild[];
}

export function ShellState(props: ShellStateProps) {
  const initialState: UseShellState = useMemo(() => {
    let memoState = {
      ...emptyUseShellState,
      components: props.components,
    };

    props.views?.forEach(
      (view) =>
        (memoState = reducer(memoState, {
          type: 'launchViewState',
          viewState: view,
        }))
    );

    return memoState;
  }, [props.views, props.components]);

  console.log('initialState', initialState);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ShellStateContext.Provider value={state}>
      <ShellDispatchContext.Provider value={dispatch}>
        {props.children}
      </ShellDispatchContext.Provider>
    </ShellStateContext.Provider>
  );
}

export function useShellState(): UseShellState {
  const state = useContext(ShellStateContext);
  return state;
}

export function useShellDispatch(): Dispatch<ShellAction> {
  const dispatch = useContext(ShellDispatchContext);
  return dispatch;
}
