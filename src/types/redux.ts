import { IPalette } from './app';

/** palette constants */
export const SAVE_PALETTE = 'SAVE_PALETTE';
export const GENERATE_PALETTE = 'GENERATE_PALETTE';
export const DELETE_PALETTE = "DELETE_PALETTE";
export const RESTORE_DEFAULTS = "RESTORE_DEFAULTS";

/** ui constants */
export const DRAWER_OPEN = "DRAWER_OPEN";
export const DRAWER_CLOSE = "DRAWER_CLOSE";
export const DIALOG_OPEN = "DIALOG_OPEN";
export const DIALOG_CLOSE = "DIALOG_CLOSE";
export const CONFIRM_DIALOG_OPEN = "CONFIRM_DIALOG_OPEN";
export const CONFIRM_DIALOG_CLOSE = "CONFIRM_DIALOG_CLOSE";

/** palette actions */
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
};

export type paletteActions = savePaletteAction | generatePaletteAction | deletePaletteAction | restoreDefaultsAction;

/** ui actions */
interface drawerOpenAction {
  type: typeof DRAWER_OPEN;
  payload: { isDrawerOpen: boolean }
};

interface drawerCloseAction {
  type: typeof DRAWER_CLOSE;
  payload: { isDrawerOpen: boolean }
};

interface dialogOpenAction {
  type: typeof DIALOG_OPEN;
  payload: { isDialogOpen: boolean }
};

interface dialogCloseAction {
  type: typeof DIALOG_CLOSE;
  payload: { isDialogOpen: boolean }
};

interface confDialogOpenAction {
  type: typeof CONFIRM_DIALOG_OPEN;
  payload: { isConfDialogOpen: boolean, deleteId: string }
};

interface confDialogCloseAction {
  type: typeof CONFIRM_DIALOG_CLOSE;
  payload: { isConfDialogOpen: boolean, deleteId: string }
};

export type uiActions = drawerOpenAction
  | drawerCloseAction
  | dialogOpenAction
  | dialogCloseAction
  | confDialogOpenAction
  | confDialogCloseAction;

export interface PaletteState {
  palettes: IPalette[];
};

export interface UIState {
  isDialogOpen: boolean;
  isDrawerOpen: boolean;
  isConfDialogOpen: boolean;
  deleteId: string;
};