import React, { useState } from 'react';

import { ColourBox } from '../ColourBox';
import { Navbar } from '../AppNavbar';
import { Footer } from '../Footer';
import { IGeneratePalette } from '../../types';
import { useStyles } from './useStyles';

export const Palette = ({ colors, paletteName, id }: IGeneratePalette) => {
  const classes = useStyles();
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');

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
          colorId={color.id}
          paletteId={id}
          showLink={true}
          showFullPalette={true}
        />
      )
    });
  };

  return (
    <div className={classes.palette}>
      <div>
        <Navbar
          level={level}
          isSingleColor={false}
          handleLevelChange={handleLevelChange}
          handleSelectChange={handleSelectChange} />
      </div>
      <div className={classes.colors}>
        {renderColourBoxes()}
      </div>
      <Footer paletteName={paletteName} />
    </div>
  )
}

