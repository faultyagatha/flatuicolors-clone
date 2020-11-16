import { createStore } from 'redux';

import { rootReducer, RootState } from './reducers';
import { seedPalette } from '../seed';

//TODO: fix the type
// const initState: any = {
//   palettes: {
//     palette: seedPalette
//   }
// };

export const makeStore = () => {
  const store = createStore(
    rootReducer,
    // initialState,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}

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