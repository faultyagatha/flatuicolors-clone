import { IPalette } from './types';

export const SAVE_PALETTE = 'SAVE_PALETTE';
export const FIND_PALETTE = 'FIND_PALETTE';
export const GENERATE_PALETTE = 'GENERATE_PALETTE';

type savePaletteAction = {
  type: typeof SAVE_PALETTE;
  payload: { palette: any }
};

type findPaletteAction = {
  type: typeof FIND_PALETTE;
  payload: { palette: any }
};

type generatePaletteAction = {
  type: typeof GENERATE_PALETTE;
  payload: { palette: any }
};

export type paletteActions = findPaletteAction | savePaletteAction | generatePaletteAction;

export type PaletteState = {
  palettes: IPalette[];
};