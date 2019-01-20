import React from 'react';
import Logo from 'shared/images/Logo.svg';
import './style.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        Hello World
        <br />
        <img src={Logo} alt="" />
      </div>
    );
  }
}

export default App;
