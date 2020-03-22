import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './landing/landing';
import NavbarContainer from './navbar/navbar_container';
import Modal from './modal/modal';
import ShowFormContainer from './airport-show/show_container'



const App = () => (
  <div className="app">
    <NavbarContainer />
    <Modal />
    <Switch>
      <Route path='/airports/:airportId' component={ShowFormContainer} />
      <Route path='/' component={Landing} />
    </Switch>
  </div>
);
export default App;
