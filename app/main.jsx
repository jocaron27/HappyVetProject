'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

render (
  <Provider store={store}>
      <nav>
        <li>Campuses</li>
        <li>Students</li>
      </nav>
  </Provider>,
  document.getElementById('main')
)
