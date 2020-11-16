import React from 'react';
import { useDispatch } from 'react-redux';

import { CreatePalette } from '../components/CreatePalette';
import { savePalette } from '../redux/actions';

export const NewPalette = () => {
  const dispatch = useDispatch();

  const saveNewPalette = (newPalette: any) => {
    console.log(newPalette);
    dispatch(savePalette(newPalette));
  };

  return (
    <>
      <CreatePalette saveNewPalette={(newPalette: any) => saveNewPalette(newPalette)} />
    </>
  )
}
