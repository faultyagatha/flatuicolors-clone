import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { savePalette } from '../redux/actions';
import { RootState } from '../redux/reducers';
import { CreatePalette } from '../components/CreatePalette';

export const NewPalette = () => {
  const dispatch = useDispatch();
  const { palettes } = useSelector((state: RootState) => state.palette)

  const saveNewPalette = (newPalette: any) => {
    dispatch(savePalette(newPalette));
  };

  return (
    <>
      <CreatePalette
        saveNewPalette={(newPalette: any) => saveNewPalette(newPalette)}
        palettes={palettes}
        maxColors={20} />
    </>
  )
}
