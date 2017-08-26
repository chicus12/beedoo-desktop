'use strict'

import React from 'react'
import { render } from 'react-dom'

import App from './containers/app'

require('./styles/main.sass')

render(
  <App />,
  document.getElementById('root'),
)
