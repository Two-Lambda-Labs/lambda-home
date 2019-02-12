import React from 'react';
// @ts-lint-ignore
import { AngleRect } from 'shared/components';
import { About, Header, Lab } from './components';
import './style.scss';

export default () => (
  <div className="app-container">
    <Header />
    <AngleRect id="1" />
    <About />
    <AngleRect id="2" left={true} />
    <Lab />
  </div>
);
