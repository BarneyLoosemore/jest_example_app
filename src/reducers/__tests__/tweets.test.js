import tweetsReducer from 'reducers/tweets'
import { SAVE_TWEET } from 'actions/types'

it('handles actions of type SAVE_TWEET', () => {
  const action = {
    type: SAVE_TWEET,
    payload: 'New Tweet'
  }

  const newState = tweetsReducer([], action)
  expect(newState).toEqual(['New Tweet'])
})

it('handles action with unknown type', () => {
  const newState = tweetsReducer([], { type: 'NOT_A_KNOWN_ACTION_TYPE' })

  expect(newState).toEqual([])
})