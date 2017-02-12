/* global test, expect */
import React from 'react'
import { shallow } from 'enzyme'
import Footer from './'

test('Footer Component renders correctly', done => {
  const props = { location: { pathname: '/'}}
  const result = shallow(
    <Footer {...props} />
  )

  expect(result).toMatchSnapshot()
  done()
})
