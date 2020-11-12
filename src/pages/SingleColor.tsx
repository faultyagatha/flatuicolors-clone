import React from 'react';
import { useParams } from 'react-router-dom';

import { SingleColorPalette } from '../components/SingleColorPalette';
import { seedPalette } from '../seed';
import { generatePalette, findPalette } from '../helpers';
import { IColorParams, IGeneratePalette, } from '../types/types';

export const SingleColor = () => {
  const { id, colorId } = useParams<IColorParams>();
  console.log('SINGLE COLOUR ID: ', colorId);

  const palette = findPalette(id);
  console.log('SINGLE PALETTE', palette);

  return (
    <div>
      {palette && <SingleColorPalette colorId={colorId} palette={generatePalette(palette)} />}
    </div>
  )
};