import React, { useState } from 'react';

import { ISingleColorPalette } from '../../types/types';
import { getShades } from '../../helpers';
import { ColourBox } from '../ColourBox';

export const SingleColorPalette = ({ colorId, palette }: ISingleColorPalette) => {
  const [format, setFormat] = useState('hex');

  const shades = getShades(palette, colorId);
  console.log('PALETTE: ', palette);
  console.log('SHADES: ', shades);

  const handleFormatChange = (value: any) => {
    setFormat(value);
  }

  const colorBoxes = shades.map((color: any) => {
    return <ColourBox
      key={color.name}
      name={color.name}
      background={color.format}
      paletteId={palette.id}
      colorId={color.colorId}
      showLink={false}
    />
  });


  return (
    <div className='Palette'>
      {colorBoxes}
    </div>
  )
}


