import React from 'react'

import { reduce, inc, compose, reject, propEq } from 'ramda'

const countCompleted = compose(
  reduce(inc, 0),
  reject(propEq('completed', true))
)

const ItemsLeft = ({todos}) => (
  <span className="todo-count"><strong>{countCompleted(todos)}</strong> item left</span>
)

export default ItemsLeft
