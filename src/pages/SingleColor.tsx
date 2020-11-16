import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { SingleColorPalette } from '../components/SingleColorPalette';
import { generatePalette } from '../helpers';
import { IColorParams } from '../types';
import { generateFromSeed } from '../redux/actions';
import { RootState } from '../redux/reducers';

export const SingleColor = () => {
  const dispatch = useDispatch();
  const { id, colorId } = useParams<IColorParams>();
  const { palettes } = useSelector((state: RootState) => state.palette);

  const [palette] = palettes.filter(p => p.id === id);
  // const generatePalette = dispatch(generateFromSeed(palette));
  console.log('SINGLE PALETTE', palette);

  return (
    <div>
      {palette && <SingleColorPalette colorId={colorId} palette={generatePalette(palette)} />}
    </div>
  )
};