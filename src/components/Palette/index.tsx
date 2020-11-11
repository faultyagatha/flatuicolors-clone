import React, { useState } from 'react';

import { ColourBox } from '../ColourBox';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { IGeneratePalette } from '../../types/types';
import './index.css';

export const Palette = (palette: IGeneratePalette) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');

  const { colors, paletteName, emoji } = palette;

  const handleLevelChange = (newLevel: number) => {
    setLevel(newLevel);
  };

  const handleSelectChange = (value: string) => {
    setFormat(value);
  };

  const renderColourBoxes = () => {
    return colors[level].map((color: any) => {
      return (
        <ColourBox
          background={color[format]}
          key={color[format]}
          name={color[format]}
        />
      )
    });
  };

  return (
    <div className="palette">
      <div>
        <Navbar
          level={level}
          handleLevelChange={handleLevelChange}
          handleSelectChange={handleSelectChange} />
      </div>
      <div className="palette-colours">
        {renderColourBoxes()}
      </div>
      <Footer paletteName={paletteName} emoji={emoji} />
    </div>
  )
}

