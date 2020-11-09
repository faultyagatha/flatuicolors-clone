import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Palette } from './components/Palette';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Palette} />
      <Route exact path="/palette/:id" render={() => <h1>Palette</h1>} />
    </Switch>
  )
};
