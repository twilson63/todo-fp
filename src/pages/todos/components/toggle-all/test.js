/* global test, expect */
import ToggleAll from './'
import React from 'react'
import { shallow } from 'enzyme'

test('ToggleAll Component renders correctly', done => {
  const props = {}
  const result = shallow(
    <ToggleAll {...props} />
  )

  expect(result).toMatchSnapshot()
  done()
})
