import React from 'react';

import { ColourBox } from '../ColourBox';
import { IGeneratePalette, IPalette } from '../../types';
import './index.css';

//1. navbar
//2. palette colours

export const Palette = (palette: IGeneratePalette) => {
  // const renderColourBoxes = () => {
  //   return colors.map((colour: any) => <ColourBox background={colour.color} key={colour.name} name={colour.name} />)
  // };

  return (
    <div className="palette">
      <div>
        navbar
      </div>
      <div className="palette-colours">
        {/* {renderColourBoxes()} */}
      </div>
      <div>
        Footer
      </div>
    </div>
  )
}

