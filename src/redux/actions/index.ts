import { Dispatch } from "redux";

import { generatePalette } from '../../helpers';
import {
  SAVE_PALETTE,
  GENERATE_PALETTE,
  DELETE_PALETTE,
  RESTORE_DEFAULTS,
  paletteActions,
  DRAWER_OPEN,
  DRAWER_CLOSE,
  DIALOG_OPEN,
  DIALOG_CLOSE,
  CONFIRM_DIALOG_OPEN,
  CONFIRM_DIALOG_CLOSE,
  uiActions
} from '../../types';

export const savePalette = (newPalette: any): paletteActions => {
  return {
    type: SAVE_PALETTE,
    payload: { palette: newPalette }
  }
};

export const generateFromSeed = (palette: any): paletteActions => {
  return {
    type: GENERATE_PALETTE,
    payload: { palette: generatePalette(palette) }
  }
};

const deletePaletteAction = (id: string): paletteActions => {
  return {
    type: DELETE_PALETTE,
    payload: { id }
  }
};

const restoreDefaultsAction = (): paletteActions => {
  return {
    type: RESTORE_DEFAULTS,
  }
};

/** thunk */
export const deletePalette = (id: string): any => {
  return async (dispatch: Dispatch, getState: any) => {
    localStorage.removeItem(getState().palette);
    dispatch(deletePaletteAction(id));
  }
};

export const restoreDefaults = (): any => {
  return async (dispatch: Dispatch, getState: any) => {
    localStorage.clear();
    dispatch(restoreDefaultsAction());
  }
};

/** UI */
export const openDialog = (): uiActions => {
  return {
    type: DIALOG_OPEN,
    payload: { isDialogOpen: true }
  };
};

export const closeDialog = (): uiActions => {
  return {
    type: DIALOG_CLOSE,
    payload: { isDialogOpen: false }
  }
};

export const openDrawer = (): uiActions => {
  return {
    type: DRAWER_OPEN,
    payload: { isDrawerOpen: true }
  }
};

export const closeDrawer = (): uiActions => {
  return {
    type: DRAWER_CLOSE,
    payload: { isDrawerOpen: false }
  }
};

export const openConfDialog = (id: string): uiActions => {
  return {
    type: CONFIRM_DIALOG_OPEN,
    payload: { isConfDialogOpen: true, deleteId: id }
  };
}

export const closeConfDialog = (): uiActions => {
  return {
    type: CONFIRM_DIALOG_CLOSE,
    payload: { isConfDialogOpen: false, deleteId: '' }
  }
};