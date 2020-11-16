import { combineReducers } from 'redux';

import { seedPalette } from '../../seed';

import {
  SAVE_PALETTE,
  FIND_PALETTE,
  GENERATE_PALETTE,
  paletteActions,
  PaletteState
} from '../../types';

const initState: PaletteState = {
  palettes: seedPalette
};

function palette(
  state: PaletteState = initState,
  action: paletteActions
): PaletteState {
  switch (action.type) {
    case FIND_PALETTE: {
      const { palette } = action.payload;
      return { palettes: [...state.palettes, palette] }
    }
    case SAVE_PALETTE: {
      const { palette } = action.payload;
      return { palettes: [...state.palettes, palette] };
    }
    case GENERATE_PALETTE: {
      const { palette } = action.payload;
      return { palettes: [...state.palettes, palette] };
    }
    default:
      console.log(state);
      return state;
  }
};

export const rootReducer = combineReducers({
  palette
});

export type RootState = ReturnType<typeof rootReducer>;
