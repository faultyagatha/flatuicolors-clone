import React from 'react';

import { PaletteList } from '../components/PaletteList';
import { seedPalette } from '../seed';

export const AllPallets = () => {
  return (
    <div>
      <PaletteList seedPalettes={seedPalette} />
    </div>
  )
}
