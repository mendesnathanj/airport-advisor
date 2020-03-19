import React from 'react';
<<<<<<< HEAD
import { Switch, Route } from 'react-router-dom';
import Landing from './landing/landing';
import NavbarContainer from './navbar/navbar_container';

const App = () => (
  <div className="app">
    <NavbarContainer />
    <Switch>
      <Route path='/' component={Landing} />
    </Switch>
=======
import './App.scss';
import Modal from './modal/modal'
import ModalTest from './modal/modal_test';

const App = () => (
  <div className="app">
    hewwo there!!!
    <header>
      <ModalTest/>
    </header>
      <Modal />
>>>>>>> 3a1e08d4a9856cc4df96dee77a51d70bec6ad29e
  </div>
);

export default App;
