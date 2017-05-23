import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/index';
import Datagrid from './components/Datagrid/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Datagrid />
      </div>
    );
  }
}

export default App;
