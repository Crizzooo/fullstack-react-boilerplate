import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import store from './store.js';
import App from './app.js';

//load main css
import './stylesheets/index.scss';

ReactDOM.render(
  (<Provider store={store} >
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={App} />
        </Route>
    </Router>
  </Provider>),
  document.getElementById('app'));
