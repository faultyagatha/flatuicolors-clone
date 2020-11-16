import { combineReducers } from 'redux';

import {
  SAVE_PALETTE,
  FIND_PALETTE,
  paletteActions,
  PaletteState
} from '../../types';

const palette = (state: PaletteState, action: paletteActions): PaletteState => {
  switch (action.type) {
    case FIND_PALETTE: {
      const { palette } = action.payload;
      return { ...state, palette };
    }
    case SAVE_PALETTE: {
      const { palette } = action.payload;
      return { ...state, palette };
    }
    default:
      return state;
  }
};

export const createRootReducer = () => {
  combineReducers({
    palette
  })
}