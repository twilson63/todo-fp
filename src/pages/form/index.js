import React from 'react'
import { map, prop, compose, filter, cond,
  reject, T, propEq, identity } from 'ramda'

import { Header } from '../todos/components'

const Form = (props) => (
  <div>
    <Header {...props} />
    <h1>Hello World!</h1>
  </div>
)

export default Form
