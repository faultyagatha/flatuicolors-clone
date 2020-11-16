import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { PaletteList } from '../components/PaletteList';

export const AllPallets = () => {
  const { palettes } = useSelector((state: any) => state.palette)

  return (
    <div>
      <PaletteList seedPalettes={palettes} />
    </div>
  )
}
