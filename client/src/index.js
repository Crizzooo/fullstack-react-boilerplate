import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store.js';

//load main css
import './public/stylesheets/index.scss';

//load components
import SampleComponent from './components/sampleComponent';

ReactDOM.render(
  <Provider store={store} >
    <SampleComponent />
  </Provider>,
  document.getElementById('app')
);

    // <h3>You'll probably put some stuff here ;)</h3>
