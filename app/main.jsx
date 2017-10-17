'use strict'
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from './components/Root';
import { Provider } from 'react-redux';
import store from './store';

render (
  <Provider store={store}>
    <Router>
      <Root />
    </Router>
  </Provider>,
  document.getElementById('main')
)
