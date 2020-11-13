import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { ISingleColorPalette } from '../../types/types';
import { useStyles } from './useStyles';
import { getShades } from '../../helpers';
import { ColourBox } from '../ColourBox';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';

export const SingleColorPalette = ({ colorId, palette }: ISingleColorPalette) => {
  const history = useHistory();
  const [format, setFormat] = useState('hex');
  const classes = useStyles();

  const shades = getShades(palette, colorId);
  console.log('PALETTE: ', palette);
  console.log('SHADES: ', shades);

  const handleFormatChange = (value: any) => {
    setFormat(value);
  };

  const handleGoBackClick = (id: string) => {
    history.push(`/palette/${id}`);
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
      />
      <div className={classes.colors}>
        {colorBoxes}
      </div>
      <div
        className={classes.goBack}
        onClick={() => handleGoBackClick(palette.id)}
      >
        Go Back
      </div>
      <Footer
        paletteName={palette.paletteName}
        emoji={palette.emoji} />
    </div>
  )
}


