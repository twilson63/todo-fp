/* global test, expect */
import React from 'react'
import { shallow } from 'enzyme'
import Header from './'

test('Header Component renders correctly', done => {
  const props = {}
  const result = shallow(
    <Header {...props} />
  )

  expect(result).toMatchSnapshot()
  done()
})
