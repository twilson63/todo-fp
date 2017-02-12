/* global test, expect */
import React from 'react'
import { shallow } from 'enzyme'
import TodoItem from './'

test('TodoItem Component renders correctly', done => {
  const props = { todo: {text: 'foo', completed: false}}
  const result = shallow(
    <TodoItem {...props} />
  )

  expect(result).toMatchSnapshot()
  done()
})
