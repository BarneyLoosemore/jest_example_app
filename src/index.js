import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'react-redux'
import thunk from 'redux-thunk'

import reducers from './reducers'
import App from './components/App'

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  (
    <Provider store={store} >
      <Router>
        <App />
      </Router>
    </Provider>
  ), document.querySelector('#root')
)