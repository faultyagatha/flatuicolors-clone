import chroma from 'chroma-js';

import { IPalette, IGeneratePalette } from '../types';
import { seedPalette } from '../seed';

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const getRange = (hexColour: string) => {
  //range: colour.dark - color - white
  const end = "#fff"; //white
  return [
    chroma(hexColour)
      .darken(1.4)
      .hex(),
    hexColour,
    end
  ];
}

const getScale = (hexColour: string, numberOfColors: number) => {
  return chroma
    .scale(getRange(hexColour))
    .mode("lab")
    .colors(numberOfColors);
}

export const generatePalette = (seedPalette: IPalette) => {
  let newPalette: IGeneratePalette = {
    paletteName: seedPalette.paletteName,
    id: seedPalette.id,
    colors: {}
    // 50: [],
    // 100: [],
    // 200: []
  };

  //build a new colours object {50: [], 100: []...}
  for (let level of levels) {
    newPalette.colors[level] = [];
  }

  for (let color of seedPalette.colors) {
    //generate a scale of 10 colours
    let scale = getScale(color.color, 10).reverse(); //go from dark to light
    //map the scale colour values to the number levels
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)")
      });
    }
  }
  return newPalette;
};

export const findPalette = (id: string) => {
  return seedPalette.find((palette: any) => {
    return palette.id === id;
  });
};

export const getShades = (palette: IGeneratePalette, colorId: string) => {
  let shades: any = [];
  let allColors = palette.colors;
  for (let key in allColors) {
    // console.log(allColors[key])
    shades = shades.concat(
      allColors[key].filter(color => color.id === colorId)
    );
  }
  return shades.slice(1); //get rid of level 50
};