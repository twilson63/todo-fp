/* global test, expect */
import React from 'react'
import { shallow } from 'enzyme'
import FilterButton from './'

test('FilterButton Component renders correctly', done => {
  const props = { location: { pathname: '/'}}
  const result = shallow(
    <FilterButton {...props} />
  )

  expect(result).toMatchSnapshot()
  done()
})
