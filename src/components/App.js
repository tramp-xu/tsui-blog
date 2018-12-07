import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import Layout from "./layout/Layout";
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Layout></Layout>
      </HashRouter>
    );
  }
}

export default App;
