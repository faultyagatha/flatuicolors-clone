export interface IPalette {
  paletteName: string;
  id: string;
  emoji: string;
  colors: { name: string; color: string; }[]
};

export interface IGeneratePalette {
  paletteName: string;
  id: string;
  emoji: string;
  colors: {
    //to prevent missing index signature TS complain
    [index: number]: any[],
    level: {
      hex: string,
      id: string,
      name: string,
      rgb: string
    }[]
  }
};