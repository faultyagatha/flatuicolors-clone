import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Palette } from '../components/Palette';
import { generatePalette, findPalette } from '../helpers';
import { IParams } from '../types';
import { RootState } from '../redux/reducers';

export const SinglePalette = () => {
  const { id } = useParams<IParams>();
  const { palettes } = useSelector((state: RootState) => state.palette);

  const [palette] = palettes.filter(p => p.id === id);
  // console.log('SINGLE PALETTE', palette);
  return (
    <div>
      {palette && <Palette {...generatePalette(palette)} />}
    </div>
  )
}
