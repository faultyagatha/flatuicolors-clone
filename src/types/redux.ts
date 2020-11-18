import { IPalette } from './app';

export const SAVE_PALETTE = 'SAVE_PALETTE';
export const FIND_PALETTE = 'FIND_PALETTE';
export const GENERATE_PALETTE = 'GENERATE_PALETTE';
export const DELETE_PALETTE = "DELETE_PALETTE";

interface savePaletteAction {
  type: typeof SAVE_PALETTE;
  payload: { palette: any }
};

interface findPaletteAction {
  type: typeof FIND_PALETTE;
  payload: { palette: any }
};

interface generatePaletteAction {
  type: typeof GENERATE_PALETTE;
  payload: { palette: any }
};

interface deletePaletteAction {
  type: typeof DELETE_PALETTE;
  payload: { palette: any }
};

export type paletteActions = findPaletteAction | savePaletteAction | generatePaletteAction | deletePaletteAction;

export interface PaletteState {
  palettes: IPalette[];
};