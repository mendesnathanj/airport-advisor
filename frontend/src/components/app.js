import React from 'react';
import './App.scss';
import Modal from './modal/modal'
import ModalTest from './modal/modal_test';
import AirportResults from './airport_results/airport_results'

const App = () => (
  <div className="app">
    <header>
      <ModalTest/>
    </header>
      <Modal />
      <AirportResults/>
  </div>
);

export default App;
