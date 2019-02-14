import { combineReducers } from 'redux'
import tweetsReducer from 'reducers/tweets'

const reducers = combineReducers({
  tweets: tweetsReducer
})

export default reducers