import React from 'react';

import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import House from './Components/House/House';
import Wizard from './Components/Wizard/Wizard';

function App() {
  return (
    <div className="App">
      <Header/>
      <Dashboard/>
      <House/>
      <Wizard/>
    </div>
  );
}

export default App;
