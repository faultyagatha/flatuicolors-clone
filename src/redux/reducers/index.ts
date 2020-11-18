import { combineReducers } from 'redux';

import { seedPalette } from '../../seed';

import {
  SAVE_PALETTE,
  GENERATE_PALETTE,
  DELETE_PALETTE,
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
    case SAVE_PALETTE: {
      const { palette } = action.payload;
      return { palettes: [...state.palettes, palette] };
    }
    case GENERATE_PALETTE: {
      const { palette } = action.payload;
      return { palettes: [...state.palettes, palette] };
    }
    case DELETE_PALETTE: {
      const { id } = action.payload;
      const updatedPalettes = [...state.palettes].filter(p => p.id !== id);
      return { palettes: updatedPalettes }
    }
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  palette
});

export type RootState = ReturnType<typeof rootReducer>;
