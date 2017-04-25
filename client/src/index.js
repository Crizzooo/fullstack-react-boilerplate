import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '../store.js';

//load main css
import '../stylesheets/index.scss';

ReactDOM.render(
  <Provider store={store} >
    <h3>You'll probably put some stuff here ;)</h3>
  </Provider>,
  document.getElementById('app')
);
