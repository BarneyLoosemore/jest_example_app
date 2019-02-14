import React from 'react'
import { mount } from 'enzyme'

import TweetList from 'components/TweetList'
import Root from 'Root'


let component

beforeEach(() => {
  const initialState = {
    tweets: ['Tweet1', 'Tweet2']
  }

  component = mount(
    <Root initialState={initialState}>
      <TweetList />
    </Root>
  )
})

it('creates one list item per tweet', () => {
  expect(component.find('li').length).toEqual(2)
})

// CheerioWrapper in enzyme docs
it('displays the text from each tweet', () => {
  expect(component.render().text()).toContain('Tweet1')
  expect(component.render().text()).toContain('Tweet2')
})

