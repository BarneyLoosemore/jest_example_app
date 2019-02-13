import React from 'react'
import { mount } from 'enzyme'

import TweetBox from 'components/TweetBox'

let component

beforeEach(() => {
  component = mount(<TweetBox />)
})

afterEach(() => {
  component.unmount()
})

it('has a text area and a button', () => {
  expect(component.find('textarea').length).toEqual(1)
  expect(component.find('button').length).toEqual(1)
})

describe('the text area', () => {
  beforeEach(() => {
    component.find('textarea').simulate('change', { target: { value: 'new tweet' } })
    component.update()
  })

  it('has a text area that users can type in', () => {
    expect(component.find('textarea').prop('value')).toEqual('new tweet')
  })
  
  it('is emptied on form submit', () => {  
    component.find('form').simulate('submit')
    component.update()
  
    expect(component.find('textarea').prop('value')).toEqual('')
  })
})
