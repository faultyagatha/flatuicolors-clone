import React from 'react';
import { Route, Switch, useParams } from 'react-router-dom';

import { Palette } from './components/Palette';
import { PaletteList } from './components/PaletteList';
import { SingleColorPalette } from './components/SingleColorPalette';
import { seedPalette } from './seed';
import { generatePalette } from './helpers';
import { IParams, IGeneratePalette, } from './types/types';

export const Routes = () => {
  const { id } = useParams<IParams>();
  const findPalette = (id: string) => {
    return seedPalette.find(palette => {
      console.log(palette.id)
      return palette.id === id;
    });
  };

  //todo: render dinamically
  const palette = findPalette(id);
  console.log(id); //undefined

  return (
    <Switch>
      {/* <Route exact path="/" component={Palette} /> */}
      {/* <Route exact path="/palette/:id" render={() => <h1>Palette</h1>} /> */}
      <Route
        exact
        path='/'
        render={(routeProps) => <PaletteList seedPalettes={seedPalette} {...routeProps} />} />
      <Route
        exact
        path='/palette/:id'
        render={() => (
          palette ? (
            <Palette
              {...generatePalette(palette)}
            />
          ) : (
              <Palette
                {...generatePalette(seedPalette[4])}
              />
            )
        )}
      />
      <Route exact path="/palette/:paletteId/:colorId" render={() => <SingleColorPalette />} />
    </Switch>
  )
};
