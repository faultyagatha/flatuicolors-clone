import React from 'react';
import { useSelector } from "react-redux";

import { PaletteList } from '../components/PaletteList';
import { RootState } from '../redux/reducers';
// import { PaletteState } from '../types';

export const AllPallets = () => {
  const { palettes } = useSelector((state: RootState) => state.palette)

  return (
    <div>
      <PaletteList seedPalettes={palettes} />
    </div>
  )
}
