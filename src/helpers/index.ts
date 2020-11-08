import chroma from 'chroma-js';

import { IPalette } from '../types';


interface IGeneratePalette {
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
    emoji: seedPalette.emoji,
    colors: {
      level: []
    }
    // 50: [],
    // 100: [],
    // 200: []
  };

  console.log(newPalette)

  //build a new colours object {50: [], 100: []...}
  // for (let i = 0; i < levels.length; i++) {
  //   newPalette.colors[i] = [];
  // }
  for (let level of levels) {
    newPalette.colors[level] = [];
  }

  for (let color of seedPalette.colors) {
    //generate a scale of 10 colours
    let scale = getScale(color.color, 10).reverse(); //go from dark to light
    //map the scale colour values to the number levels
    for (let i in scale) {
      // newPalette.colors.map(color => color.push({
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace("rgba", "rgba")
          .replace(")", ",1.0)")
      });
    }
  }
  console.log(newPalette);
  return newPalette;
}