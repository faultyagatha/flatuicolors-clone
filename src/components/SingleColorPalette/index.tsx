import React, { useState } from 'react';

import { ISingleColorPalette } from '../../types';
import { useStyles } from './useStyles';
import { getShades } from '../../helpers';
import { ColourBox } from '../ColourBox';
import { Navbar } from '../AppNavbar';
import { Footer } from '../Footer';

export const SingleColorPalette = ({ colorId, palette }: ISingleColorPalette) => {
  const [format, setFormat] = useState('hex');
  const classes = useStyles();

  const shades = getShades(palette, colorId);

  const handleFormatChange = (value: any) => {
    setFormat(value);
  };

  const colorBoxes = shades.map((color: any) => {
    return <ColourBox
      key={color.name}
      name={color.name}
      background={color[format]}
      paletteId={palette.id}
      colorId={color.colorId}
      showLink={false}
      showFullPalette={false}
    />
  });

  return (
    <div className={classes.palette}>
      <Navbar
        isSingleColor={true}
        handleSelectChange={handleFormatChange}
        paletteId={palette.id}
      />
      <div className={classes.colors}>
        {colorBoxes}
      </div>
      <Footer paletteName={palette.paletteName} />
    </div>
  )
}


