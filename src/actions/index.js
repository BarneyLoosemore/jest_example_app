import { SAVE_TWEET, FETCH_TWEETS } from 'actions/types'

export const saveTweet = (tweet) => {
  return {
    type: SAVE_TWEET,
    payload: tweet
  }
}

export const fetchTweets = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments')

  return {
    type: FETCH_TWEETS,
    payload: response
  }
}

export const fetchRecipes = () => async dispatch => {
  const response = await fetch('http://localhost:3000/api/v1/recipes')
  const recipes = await response.json()
  dispatch({
    type: 'FETCH_RECIPES',
    payload: recipes
  })
}