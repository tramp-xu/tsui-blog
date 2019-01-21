import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import TsuiRouter from '../router.js';
import { Provider } from 'react-redux';
import configureStore from '../redux/configureStore';
import './App.css';

const store = configureStore();
class App extends Component {
  render () {
    return (
      <HashRouter>
        <Provider store={store}>
          <TsuiRouter></TsuiRouter>
        </Provider>
      </HashRouter>
    );
  }
}

export default App;
