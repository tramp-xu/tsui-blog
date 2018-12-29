import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import TsuiRouter from '../router.js';
import './App.css';

class App extends Component {
  render () {
    return (
      <HashRouter>
        <TsuiRouter></TsuiRouter>
      </HashRouter>
    );
  }
}

export default App;
