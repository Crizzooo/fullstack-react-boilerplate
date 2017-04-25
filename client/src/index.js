import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store.js';
import App from './app.js';

//load main css
import './public/stylesheets/index.scss';

ReactDOM.render(
  (<Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>),
  document.getElementById('app'));
