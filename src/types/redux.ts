import { IPalette } from './types';

export const SAVE_PALETTE = 'SAVE_PALETTE';
export const FIND_PALETTE = 'FIND_PALETTE';

type savePaletteAction = {
  type: typeof SAVE_PALETTE;
  payload: { palette: any }
};

type findPaletteAction = {
  type: typeof FIND_PALETTE;
  payload: { palette: any }
};

export type paletteActions = findPaletteAction | savePaletteAction;

export type PaletteState = {
  palette: IPalette[];
}

export type AppState = {
  palettes: PaletteState;
};