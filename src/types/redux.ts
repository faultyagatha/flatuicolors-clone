import { IPalette } from './app';

export const SAVE_PALETTE = 'SAVE_PALETTE';
export const GENERATE_PALETTE = 'GENERATE_PALETTE';
export const DELETE_PALETTE = "DELETE_PALETTE";

interface savePaletteAction {
  type: typeof SAVE_PALETTE;
  payload: { palette: any }
};

interface generatePaletteAction {
  type: typeof GENERATE_PALETTE;
  payload: { palette: any }
};

interface deletePaletteAction {
  type: typeof DELETE_PALETTE;
  payload: { id: string }
};

export type paletteActions = savePaletteAction | generatePaletteAction | deletePaletteAction;

export interface PaletteState {
  palettes: IPalette[];
};