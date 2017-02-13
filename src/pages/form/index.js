import React from 'react'
import { map, prop, filter, cond,
  reject, T, propEq, identity } from 'ramda'

import { compose, withState, withHandlers} from 'recompose'
// import { handleChange, handleSubmit} from './handlers'

const enhance = compose(
  withState('todo', 'updateTodo', ''),
  withHandlers({
    handleChange: ({updateTodo}) => event => {
      updateTodo(event.target.value)
    }
  })
)



const Form = ({todos, todo, handleChange}) => (
  <div>
    <h1>New Todo</h1>
    <form>
      <input value={todo.description} onChange={handleChange} className="new-todo" placeholder="What needs to be done..." />
      <input value={todo.outcome} onChange={handleChange} className="new-todo" placeholder="In order to..." />
      <input value={todo.desire} onChange={handleChange} className="new-todo" placeholder="Because I want to..." />
    </form>
  </div>
)

export default enhance(Form)
