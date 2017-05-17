import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from './store.js';
import App from './app.js';

//load main css
import './public/stylesheets/index.scss';

injectTapEventPlugin();

ReactDOM.render(
  (<Provider store={store} >
    <BrowserRouter>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>),
  document.getElementById('app'));
