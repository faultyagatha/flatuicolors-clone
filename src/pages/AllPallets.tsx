import React from 'react';
import { useSelector } from "react-redux";

import { PaletteList } from '../components/PaletteList';
import { RootState } from '../redux/reducers';

export const AllPallets = () => {
  const { palettes } = useSelector((state: RootState) => state.palette);
  return (
    <PaletteList seedPalettes={palettes} />
  );
}
