import React from 'react';
import logo from './logo.svg';
import './Header.css';

const Header = ({}) => {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Daazer</h1>
      <h2>Deezer for data nerds</h2>
    </div>
  );
};

export default Header;
