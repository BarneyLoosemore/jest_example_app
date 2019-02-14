import { SAVE_TWEET, FETCH_TWEETS } from 'actions/types'

export const saveTweet = (tweet) => {
  return {
    type: SAVE_TWEET,
    payload: tweet
  }
}

export const fetchTweets = () => async dispatch => {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments')
  const tweets = await response.json()
  dispatch({
    type: FETCH_TWEETS,
    payload: tweets
  })
}