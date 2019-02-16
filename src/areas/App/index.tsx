import React from 'react';
// @ts-lint-ignore
import { AngleRect, Footer } from 'shared/components';
import { About, Header, Lab, Services, Contact } from './components';
import './style.scss';

export default () => (
  <div className="app-container">
    <Header />
    <AngleRect id="1" left={true}/>
    <About />
    <AngleRect id="2" />
    <Lab />
    <AngleRect id="3" left={true}/>
    <Services />
    <AngleRect id="4" />
    <Contact />
    <Footer />
  </div>
);
