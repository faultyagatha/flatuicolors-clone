import React from 'react';
import { useParams } from 'react-router-dom';

import { Palette } from '../components/Palette';
import { generatePalette, findPalette } from '../helpers';
import { IParams } from '../types/types';

export const SinglePalette = () => {
  const { id } = useParams<IParams>();
  // console.log('SINGLE PALETTE ID: ', id);
  const palette = findPalette(id);
  // console.log('SINGLE PALETTE', palette);
  return (
    <div>
      {palette && <Palette {...generatePalette(palette)} />}
    </div>
  )
}
