import { SAVE_TWEET } from 'actions/types'

export function saveTweet(tweet) {
    return {
        type: SAVE_TWEET,
        payload: tweet
    }
}