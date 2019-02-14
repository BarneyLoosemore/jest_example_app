<<<<<<< HEAD
import { SAVE_TWEET } from 'actions/types'

export default function (state = [], action) {
    switch (action.type) {
        case SAVE_TWEET:
            return [...state, action.payload]
        default:
            return state
    }
=======
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
>>>>>>> 0547f3d092038329da152443ce4a6dad64fbabf6
}