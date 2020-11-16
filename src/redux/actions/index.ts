import { findPalette } from '../../helpers';
import { seedPalette } from '../../seed';
import {
  SAVE_PALETTE,
  FIND_PALETTE,
  paletteActions
} from '../../types';


export const savePalette = (newPalette: any): paletteActions => {
  return {
    type: SAVE_PALETTE,
    payload: { palette: newPalette }
  }
};

export const findPaletteById = (id: string): paletteActions => {
  return {
    type: FIND_PALETTE,
    payload: { palette: findPalette(id) }
  }
};
