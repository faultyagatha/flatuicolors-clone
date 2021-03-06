import { createStore, compose, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

import { rootReducer } from './reducers';

/** state helper functions */
export const loadState = () => {
  try {
    const serialisedState = localStorage.getItem("state");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: unknown) => {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("state", serialisedState);
  } catch (err) {
    console.log("Error saving state: ", err);
  }
};

/*
const initState: RootState = {
  palette: {
    palettes: seedPalette
  },
  ui: {
    isDialogOpen: false,
    isDrawerOpen: true,
    isConfDialogOpen: false,
    deleteId: '',
    isAlert: false
  }
};
*/

export const makeStore = (initialState = loadState()) => {
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}