import { generatePalette } from '../../helpers';
import { seedPalette } from '../../seed';
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

export const deletePalette = (id: string): paletteActions => {
  return {
    type: DELETE_PALETTE,
    payload: { id }
  }
}
