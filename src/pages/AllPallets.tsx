import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { PaletteList } from '../components/PaletteList';
import { seedPalette } from '../seed';

export const AllPallets = () => {
  const { palettes } = useSelector((state: any) => state.palettes)

  return (
    <div>
      <PaletteList seedPalettes={palettes} />
    </div>
  )
}
