import { combineReducers } from 'redux';

import { seedPalette } from '../../seed';

import {
  SAVE_PALETTE,
  GENERATE_PALETTE,
  DELETE_PALETTE,
  RESTORE_DEFAULTS,
  paletteActions,
  PaletteState,
  DRAWER_OPEN,
  DRAWER_CLOSE,
  DIALOG_OPEN,
  DIALOG_CLOSE,
  CONFIRM_DIALOG_OPEN,
  CONFIRM_DIALOG_CLOSE,
  uiActions,
  UIState
} from '../../types';

const initPaletteState: PaletteState = {
  palettes: seedPalette
};

function palette(
  state: PaletteState = initPaletteState,
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
    case RESTORE_DEFAULTS: {
      return initPaletteState;
    }
    default:
      return state;
  }
};

/** ui */
const initUIState: UIState = {
  isDialogOpen: false,
  isDrawerOpen: true,
  isConfDialogOpen: false,
  deleteId: ''
};

function ui(
  state: UIState = initUIState,
  action: uiActions
): UIState {
  switch (action.type) {
    case DRAWER_OPEN: {
      const { isDrawerOpen } = action.payload;
      console.log({ ...state, isDrawerOpen });
      return { ...state, isDrawerOpen };
    }
    case DRAWER_CLOSE: {
      const { isDrawerOpen } = action.payload;
      return { ...state, isDrawerOpen };
    }
    case DIALOG_OPEN: {
      const { isDialogOpen } = action.payload;
      return { ...state, isDialogOpen };
    }
    case DIALOG_CLOSE: {
      const { isDialogOpen } = action.payload;
      return { ...state, isDialogOpen };
    }
    case CONFIRM_DIALOG_OPEN: {
      const { isConfDialogOpen, deleteId } = action.payload;
      return { ...state, isConfDialogOpen, deleteId };
    }
    case CONFIRM_DIALOG_CLOSE: {
      const { isConfDialogOpen, deleteId } = action.payload;
      return { ...state, isConfDialogOpen, deleteId };
    }
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  palette,
  ui
});

export type RootState = ReturnType<typeof rootReducer>;
