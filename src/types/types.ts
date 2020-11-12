export interface IPalette {
  paletteName: string;
  id: string;
  emoji: string;
  colors: { name: string; color: string; }[]
};

export interface IMiniPalette extends IPalette {
  handlePaletteClick(): void;
};

export interface IGeneratePalette {
  paletteName: string;
  id: string;
  emoji: string;
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
  level: number;
  handleLevelChange(newLevel: number): void;
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