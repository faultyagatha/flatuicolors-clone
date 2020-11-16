import { findPalette, generatePalette } from '../../helpers';
import { seedPalette } from '../../seed';
import {
  SAVE_PALETTE,
  FIND_PALETTE,
  GENERATE_PALETTE,
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

export const generateFromSeed = (palette: any): paletteActions => {
  return {
    type: GENERATE_PALETTE,
    payload: { palette: generatePalette(palette) }
  }
}
