// import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from './components/Auth/Auth'
import MainMenu from './components/MainMenu/MainMenu'
import AddFeelingsEntries from './components/AddFeelingsEntries/AddFeelingsEntries';

export default (
  <Switch>
    <Route exact path='/' component={ Auth } />
    <Route path='/main-menu' component={ MainMenu } />
    <Route path='/add-feelings-entries' component={ AddFeelingsEntries } />
  </Switch>
);

