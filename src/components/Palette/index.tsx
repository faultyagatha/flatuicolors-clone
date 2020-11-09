import React, { useState } from 'react';

import { ColourBox } from '../ColourBox';
import { Navbar } from '../Navbar';
import { IGeneratePalette } from '../../types';
import './index.css';

export const Palette = (palette: IGeneratePalette) => {
  const [level, setLevel] = useState(500);

  const handleLevelChange = (newLevel: number) => {
    setLevel(newLevel);
  }

  const renderColourBoxes = () => {
    return palette.colors[level].map((color: any) => {
      return (
        <ColourBox
          background={color.hex}
          key={color.hex}
          name={color.name}
        />
      )
    });
  };

  return (
    <div className="palette">
      <div>
        <Navbar level={level} handleLevelChange={handleLevelChange} />
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

