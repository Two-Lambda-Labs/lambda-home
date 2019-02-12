import 'availity-uikit/scss/_bootstrap.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './areas/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('root')
);

registerServiceWorker();