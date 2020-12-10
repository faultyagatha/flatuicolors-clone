export interface IPalette {
  paletteName: string;
  id: string;
  colors: { name: string; color: string; }[]
};

export interface IMiniPalette extends IPalette {
  handlePaletteClick(): void;
};

export interface IGeneratePalette {
  paletteName: string;
  id: string;
  colors: {
    //to prevent missing index signature TS complain
    [index: number]: {
      hex: string,
      id: string,
      name: string,
      rgb: string,
      rgba: string
    }[]
  }
};

export interface INavbar {
  level?: number;
  isSingleColor: boolean;
  paletteId?: string;
  handleLevelChange?(newLevel: number): void;
  handleSelectChange(value: string): void;
};

export interface IParams {
  id: string;
};

export interface IColorParams extends IParams {
  colorId: string;
}

export interface IPaletteList {
  seedPalettes: IPalette[];
};

export interface ISingleColorPalette {
  colorId: string;
  palette: IGeneratePalette;
}

export interface IColouBox {
  background: string;
  name: string;
  colorId: string;
  paletteId: string;
  showLink: boolean;
  showFullPalette: boolean;
  classes?: unknown;
};

export interface IFooter {
  paletteName: string;
};

export interface IPaletteDialog {
  palettes: IPalette[];
  handleSavePalette: (paletteName: string) => void;
  handleHideDialog: () => void;
  dialogOpen: boolean;
};

export interface IColorPicker {
  isPaletteFull: boolean;
  handleAddColor: (currentColor: string, colorName: string) => void;
  colorsArr: {
    name: string;
    color: string;
  }[];
};

export interface ICreatePalette {
  saveNewPalette(newPalette: unknown): void;
  palettes: IPalette[];
  maxColors: number;
};

export interface ICreatePaletteNav {
  open: boolean;
  colorsArr: {
    name: string;
    color: string;
  }[];
  saveNewPalette: (newPalette: any) => void;
  palettes: IPalette[];
  handleDrawerOpen: () => void;
};

export interface IDraggableColorBox {
  color: string;
  name: string;
  handleDeleteClick(): void
};

export interface IDraggableColorList {
  colorsArr: {
    color: string;
    name: string;
  }[];
  handleDeleteClick(name: string): void;
};


