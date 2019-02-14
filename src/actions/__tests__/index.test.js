import { saveTweet } from 'actions'
import { SAVE_TWEET } from 'actions/types'

// wrap each action creator in a 'describe' statement
// can the define its functionality with 'it' statements
describe('saveTweet', () => {
  it('has the correct type', () => {
    const action = saveTweet()

    expect(action.type).toEqual(SAVE_TWEET)
  })

  it('has the correct payload', () => {
    const action = saveTweet('New Tweet')

    expect(action.payload).toEqual('New Tweet')
  })
})