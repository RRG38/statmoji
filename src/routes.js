import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Today from './components/Today';
import Past from './components/Past';

export default (
  <Switch>
    <Route component={Landing} exact path='/' /> 
    <Route component={Today} path='/today' />
    <Route component={Past} path='/past' />
  </Switch>
);