import React from 'react';

import { CreatePalette } from '../components/CreatePalette';

export const NewPalette = () => {
  const savePalette = (newPalette: any) => {
    console.log(newPalette);
  };

  return (
    <>
      <CreatePalette savePalette={(newPalette: any) => savePalette(newPalette)} />
    </>
  )
}
