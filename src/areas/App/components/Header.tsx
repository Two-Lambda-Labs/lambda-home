import React from 'react';
import { Jumbotron } from 'reactstrap';
import Logo from 'shared/images/Logo.svg';

export default () => (
  <Jumbotron className="header-con text-center mb-0">
    <img src={Logo} alt="" />
    <h1>Two Lamdba</h1>
    <div className="d-flex justify-content-center">
      <p>
        <span>Creating software and tech solutions for anyone.</span>
      </p>
    </div>
  </Jumbotron>
);
