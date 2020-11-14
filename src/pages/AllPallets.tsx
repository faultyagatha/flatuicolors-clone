import React from 'react';

import { PaletteList } from '../components/PaletteList';
import { seedPalette } from '../seed';

export const AllPallets = () => {
  // console.log(seedPalette);
  return (
    <div>
      <PaletteList seedPalettes={seedPalette} />
    </div>
  )
}
