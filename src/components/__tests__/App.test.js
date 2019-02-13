import React from 'react'
import { shallow } from 'enzyme'

import App from 'components/App'
import TweetBox from 'components/TweetBox'
import TweetList from 'components/TweetList'

let component

beforeEach(() => {
  component = shallow(<App />)
})

it('shows a tweet box', () => {
  expect(component.find(TweetBox).length).toEqual(1)
})

it('shows a list of tweets', () => {
  const component = shallow(<App />)
  expect(component.find(TweetList).length).toEqual(1)
})