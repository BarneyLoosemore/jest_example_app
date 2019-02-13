import React from 'react'
import { shallow } from 'enzyme'

import App from '../App'
import TweetBox from '../TweetBox'

it('shows a tweet box', () => {
    const component = shallow(<App />)

    expect(component.find(TweetBox).length)
    .toEqual(1)
})