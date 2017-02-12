import React from 'react'

import { compose, withState, withHandlers } from 'recompose'
import { handleChange, handleSubmit } from './handlers'

const enhance = compose(
  withState('todo', 'updateTodo', ''),
  withHandlers({ handleChange, handleSubmit })
)

const NewTodo = ({todo, handleChange, handleSubmit}) => (
  <form onSubmit={handleSubmit}>
    <input
      value={todo}
      onChange={handleChange}
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
    />
  </form>
)

export default enhance(NewTodo)
