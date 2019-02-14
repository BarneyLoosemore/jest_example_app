import { SAVE_TWEET, FETCH_TWEETS } from 'actions/types'

export default function (state = [], action) {
  switch (action.type) {
    case SAVE_TWEET:
      return [...state, action.payload]
    case FETCH_TWEETS:
      const tweets = action.payload.map(tweet => tweet.name)
      return [...state, ...tweets]
    default:
      return state
  }
}