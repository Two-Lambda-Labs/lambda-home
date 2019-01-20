import React from 'react';
import Logo from 'shared/images/Logo.svg';
import './style.scss';

export default () => (
  <div className="app-container">
    Hello World
    <br />
    <img src={Logo} alt="" />
  </div>
);
