import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './landing/landing';
import NavbarContainer from './navbar/navbar_container';
import Modal from './modal/modal';
import AirportResultsContainer from './airport_results/airport_results_container';
import ShowForm from './airport-show/show_form'
// import AirportResults from './airport_results/airport_results';


const App = () => (
  <div className="app">
    <NavbarContainer />
    <Modal />
    <Switch>
      <Route path='/airports' component={AirportResultsContainer} />
      <Route path='/:airportId' component={ShowForm} />
      <Route path='/' component={Landing} />
    </Switch>
  </div>
);
export default App;
