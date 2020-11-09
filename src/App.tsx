import React from 'react';

import { Palette } from './components/Palette';
import { seedPalette } from './seed';
import { generatePalette } from './helpers';
import './App.css';

const App = () => {
  const palette = generatePalette(seedPalette[4]);
  console.log(palette);
  return (
    <div>
      <Palette {...palette} />
    </div>
  );
}

export default App;
