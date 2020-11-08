import React from 'react';

import { ColourBox } from '../ColourBox';
import './index.css';

//1. navbar
//2. palette colours

interface IPaletteProps {
  colours: {
    paletteName: string;
    id: string;
    emoji: string;
    colors: {
      name: string;
      color: string;
    }[];
  }
};

export const Palette = ({ colours }: IPaletteProps) => {
  const renderColourBoxes = () => {
    const { colors } = colours;
    return colors.map((colour: any) => <ColourBox background={colour.color} key={colour.name} name={colour.name} />)
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

