/* global test, expect */
import ItemsLeft from './'
import React from 'react'
import { shallow } from 'enzyme'

test('itemsLeft Component renders correctly', done => {
  const result = shallow(
    <ItemsLeft todos={[]} />
  )

  expect(result).toMatchSnapshot()
  done()
})
