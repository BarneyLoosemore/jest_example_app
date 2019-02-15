import React from 'react'
import { mount } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import Root from 'Root'
import App from 'components/App'


it('can fetch a list of tweets and display them', () => {

  const component = mount(
    <Root>
      <App />
    </Root>
  )

  component.find('.fetch-tweets').simulate('click')

  expect(component.find('li').length).toEqual(500)


})