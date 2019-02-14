import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router-dom'

import App from 'components/App'
import Root from 'Root'
import history from './history'


ReactDOM.render(
  (
    <Root>
      <Router history={history}>
        <Route path="/:filter?" component={App} />
      </Router>
    </Root>
  ), document.querySelector('#root')
)