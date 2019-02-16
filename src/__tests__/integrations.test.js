import React from 'react'
import { mount } from 'enzyme'
import fetchMock from 'fetch-mock'

import Root from 'Root'
import App from 'components/App'


beforeEach(() => {
  // intercept the global 'fetch' request/variable (where the request is made to this URL)
  // and send a request equivalent to the body
  fetchMock.get('http://jsonplaceholder.typicode.com/comments', {
    body: [{ "name": "First fetched tweet"}, { "name": "Second fetched tweet" }]
  })
})

afterEach(() => {
  // reset/restore the global fetch variable (atleast w/ respect to the specified URL)
  fetchMock.restore()
})


it('can fetch a list of tweets and display them', (done) => {

  // declare a variable equivalent to the component architecture
  // of the app
  const component = mount(
    <Root>
      <App />
    </Root>
  )
  
  // find the button with the class-name of 'fetch-tweets'
  //  and simulate a click event on it
  component.find('.fetch-tweets').simulate('click')
  
  // allow time for the fetchMock request to be made, and 
  // a response to be returned before test expectation executed
  setTimeout(() => {
    // force our application to update, i.e. display the newly fetched props as <li>'s
    component.update()

    // expect the our new tweet list to be equal to the 
    // number returned in the response from our fetchMock request
    expect(component.find('li').length).toEqual(2)

    // finish the test, & not prematurely 
    done()

    // unmount/cleanup our application component from our 
    // test/CL DOM in order to avoid side-effects
    component.unmount()
  }, 100)
})