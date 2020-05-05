import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './landing/landing';
import NavbarContainer from './navbar/navbar_container';
import Modal from './modal/modal';
import AirportResultsContainer from './airport_results/airport_results_container';
import ShowFormContainer from './airport-show/show_container'
import GroupPage from './group_page/group_page';


const App = () => (
  <div className="app">
    <NavbarContainer />
    <Modal />
    <Switch>
      <Route path='/group' component={GroupPage} />
      <Route path='/airports/:airportId' component={ShowFormContainer} />
      <Route path='/airports' component={AirportResultsContainer} />
      <Route path='/' component={Landing} />
    </Switch>
  </div>
);
export default App;
