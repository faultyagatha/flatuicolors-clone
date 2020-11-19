import { createStore, compose, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

import { rootReducer, RootState } from './reducers';
import { seedPalette } from '../seed';

//TODO: fix the type
// const initState: any = {
//   palettes: {
//     palette: seedPalette
//   }
// };

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

export const saveState = (state: any) => {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("state", serialisedState);
  } catch (err) {
    console.log("Error saving state: ", err);
  }
};

export const makeStore = (initialState = loadState()) => {
  console.log(initialState);
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}