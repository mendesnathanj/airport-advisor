import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './landing/landing';
import NavbarContainer from './navbar/navbar_container';

const App = () => (
  <div className="app">
    <NavbarContainer />
    <Switch>
      <Route path='/' component={Landing} />
    </Switch>
  </div>
);

export default App;
