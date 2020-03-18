import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './landing/landing';
import NavbarContainer from './navbar/navbar_container';
import Modal from './modal/modal'
import ModalTest from './modal/modal_test';
import './App.scss';

const App = () => (
  <div className="app">
    <NavbarContainer />
    <header>
      <ModalTest />
    </header>
    <Modal />
    <Switch>
      <Route path='/' component={Landing} />
    </Switch>
  </div>
);

export default App;
