import React from 'react'
import { mount } from 'enzyme'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from 'reducers'
import thunk from 'redux-thunk'

import TweetBox from 'components/TweetBox'

let component

beforeEach( () => {
    component = mount(
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
        <TweetBox />
    </Provider>)
})

afterEach( () => component.unmount() )

it('has a text area and a button', () => {
    expect(component.find('textarea').length).toEqual(1)
    expect(component.find('button').length).toEqual(1)
})

describe('The textarea', () => {
    beforeEach( () => {
    //Nesting the beforeEach inside describe allows us to limit the scope to just tests involving textarea
        component.find('textarea').simulate('change', {
        // Above - in simulate - we use 'change' not 'onChange' as we need the original JS query
            target: { value: 'new tweet' }
        })
        component.update()
        // Forces the component to update, solving async issues
    })
    
    it('has a text area that users can type in', () => {
        expect(component.find('textarea').prop('value')).toEqual('new tweet')
    })
    
    it('has a submit button that users can click, once clicked, the textarea should clear', () => {
        component.find('form').simulate('submit')
        component.update()
    
        expect(component.find('textarea').prop('value')).toEqual('')
    })

 })
