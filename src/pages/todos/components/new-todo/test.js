/* global test, expect */
import React from 'react'
import { shallow } from 'enzyme'
import NewTodo from './'

test('NewTodo Component renders correctly', done => {
  const props = {}
  const result = shallow(
    <NewTodo {...props} />
  )

  expect(result).toMatchSnapshot()
  done()
})
