import { Dispatch } from "redux";

import { generatePalette } from '../../helpers';
import {
  SAVE_PALETTE,
  GENERATE_PALETTE,
  DELETE_PALETTE,
  paletteActions
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
}

/** thunk */
export const deletePalette = (id: string): any => {
  return async (dispatch: Dispatch, getState: any) => {
    localStorage.removeItem(getState().palette);
    dispatch(deletePaletteAction(id));
  }
};
