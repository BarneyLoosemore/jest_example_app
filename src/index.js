import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'


import reducers from 'reducers'
import App from 'components/App'
import history from './history'

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  (
    <Provider store={store} >
      <Router history={history} >
        <Route path="/:filter?" component={App} />
      </Router>
    </Provider>
  ), document.querySelector('#root')
)