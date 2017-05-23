import React from 'react';
import logo from './deezer-logo.svg';
import './Header.css';
import SearchBar from '../SearchBar/';

const Header = () => {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Daat'zer</h1>
      <h3>Deezer for data nerds</h3>
      <SearchBar />
    </div>
  );
};

export default Header;
