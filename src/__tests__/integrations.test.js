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


// function occurs asynchronously
it('can fetch a list of tweets and display them', async () => {

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

  // await a promise returned from the .flush() method, that resolves
  // when all fetchMock fetches have resolved
  await fetchMock.flush(true)


  // force the component/app to update, to reflect the changes to props
  component.update()
  expect(component.find('li').length).toEqual(2)

  // cleanup/unmount the component/application from the faked DOM
  // in order to prevent side effects in future tests
  component.unmount()

})