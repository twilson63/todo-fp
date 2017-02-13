import React from 'react'
import { Link } from 'react-router-dom'
import { map, prop, filter, cond,
  reject, T, propEq, identity, prepend } from 'ramda'

import { compose, withState, withHandlers} from 'recompose'

const enhance = compose(
  withState('todos', 'updateTodo', []),
  withState('newTodoText', 'updateTodoText', ''),
  withHandlers({
    handleChange: ({updateTodo}) => event => {
      updateTodo(event.target.value)
    },
    onSubmit: (props) => event => {
      event.preventDefault()
      const newTodo = {
        id: props.todos.length,
        description: props.todos.description,
        outcome: props.todos.outcome,
        desire: props.todos.desire
      }
      console.log(props)
      props.updateTodo(prepend(newTodo, props.todos))
      props.updateTodoText('')
      console.log(props.todos)
    }
  })
)



const Form = ({todos, todo, handleChange, onSubmit}) => (
  <div>
    <h1>New Todo</h1>
    <form onSubmit={onSubmit}>
      <input value={todos.description} onChange={handleChange} className="new-todo" placeholder="What needs to be done..." />
      <input value={todos.outcome} onChange={handleChange} className="new-todo" placeholder="In order to..." />
      <input value={todos.desire} onChange={handleChange} className="new-todo" placeholder="Because I want to..." />
      <button>Save</button>
    </form>
    <button><Link to="/">Cancel</Link></button>

  </div>
)

export default enhance(Form)
