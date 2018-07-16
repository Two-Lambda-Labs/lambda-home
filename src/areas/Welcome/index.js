import React from 'react';
import Logo from 'shared/images/logo.png';
import './style.css';

export default () => (
    <div className="welcome-container">
        <img className="welcome-logo" src={Logo} />
    </div>
)