import React, { useState } from 'react';

import { ISingleColorPalette } from '../../types/types';
import { getShades } from '../../helpers';
import { ColourBox } from '../ColourBox';

export const SingleColorPalette = ({ colorId, palette }: ISingleColorPalette) => {
  const [shades, setShades] = useState(getShades(palette, colorId));
  const [format, setFormat] = useState('hex');

  console.log(shades);

  const handleFormatChange = (value: any) => {
    setFormat(value);
  }

  const renderColorBoxes = () => {
    const colorBoxes = shades.map((color: any) => {
      return <ColourBox
        key={color.name}
        name={color.name}
        background={color.format}
        paletteId={palette.id}
        colorId={color.id}
      />
    });
    return colorBoxes;
  }

  return (
    <div>
      {renderColorBoxes()}
    </div>
  )
}


