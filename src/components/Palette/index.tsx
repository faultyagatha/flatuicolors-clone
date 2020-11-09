import React from 'react';

import { ColourBox } from '../ColourBox';
import { IGeneratePalette } from '../../types';
import './index.css';

//1. navbar
//2. palette colours

export const Palette = (palette: IGeneratePalette) => {
  console.log(palette)
  const renderColourBoxes = () => {
    // return Object.keys(palette.colors).map((color: any) => {
    return palette.colors[200].map((color: any) => {
      return (
        <ColourBox
          background={color.hex}
          key={color.name}
          name={color.name}
        />
      )
    });
  };

  return (
    <div className="palette">
      <div>
        navbar
      </div>
      <div className="palette-colours">
        {renderColourBoxes()}
      </div>
      <div>
        Footer
      </div>
    </div>
  )
}

