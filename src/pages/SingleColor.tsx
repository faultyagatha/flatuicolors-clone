import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

import { SingleColorPalette } from '../components/SingleColorPalette';
import { generatePalette } from '../helpers';
import { IColorParams } from '../types';
import { RootState } from '../redux/reducers';

export const SingleColor = () => {
  const { id, colorId } = useParams<IColorParams>();
  const { palettes } = useSelector((state: RootState) => state.palette);
  const [palette] = palettes.filter(p => p.id === id);

  return (
    <div>
      {palette && <SingleColorPalette colorId={colorId} palette={generatePalette(palette)} />}
    </div>
  )
};