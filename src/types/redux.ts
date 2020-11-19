import { IPalette } from './app';

export const SAVE_PALETTE = 'SAVE_PALETTE';
export const GENERATE_PALETTE = 'GENERATE_PALETTE';
export const DELETE_PALETTE = "DELETE_PALETTE";
export const RESTORE_DEFAULTS = "RESTORE_DEFAULTS";

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

interface restoreDefaultsAction {
  type: typeof RESTORE_DEFAULTS;
}

export type paletteActions = savePaletteAction | generatePaletteAction | deletePaletteAction | restoreDefaultsAction;

export interface PaletteState {
  palettes: IPalette[];
};