import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { SingleColor } from './pages/SingleColor';
import { SinglePalette } from './pages/SinglePalette';
import { AllPallets } from './pages/AllPallets';
import { NewPalette } from './pages/NewPalette';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={AllPallets} />
      <Route exact path='/palette/new' component={NewPalette} />
      <Route exact path='/palette/:id' component={SinglePalette} />
      <Route exact path='/palette/:id/:colorId' component={SingleColor} />
    </Switch>
  )
};
