import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { SingleColorPalette } from '../components/SingleColorPalette';
// import { generatePalette } from '../helpers';
import { IColorParams } from '../types/types';
import { findPaletteById, generateFromSeed } from '../redux/actions';

export const SingleColor = () => {
  const dispatch = useDispatch();
  const { id, colorId } = useParams<IColorParams>();
  console.log('SINGLE COLOUR ID: ', colorId);

  const palette = dispatch(findPaletteById(id));
  const generatePalette = dispatch(generateFromSeed(palette));
  console.log('SINGLE PALETTE', palette);

  return (
    <div>
      {/* {palette && <SingleColorPalette colorId={colorId} palette={generatePalette} />} */}
    </div>
  )
};