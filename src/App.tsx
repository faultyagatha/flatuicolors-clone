import React from 'react';

import { Palette } from './components/Palette';
import { seedPalette } from './seed';
import './App.css';

function App() {
  return (
    <div>
      <Palette colours={{ ...seedPalette[4] }} />
    </div>
  );
}

export default App;
