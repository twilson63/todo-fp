import React from 'react'
import { map, prop, filter, cond,
  reject, T, propEq, identity, prepend } from 'ramda'

import { compose, withState, withHandlers} from 'recompose'
// import { handleChange, handleSubmit} from './handlers'

const enhance = compose(
  withState('todos', 'updateTodos', ''),
  withState('newTodoText', 'updateTodoText', ''),
  withHandlers({
    handleChange: ({updateTodos, field}) => event => {
      console.log(field)
      updateTodos(event.target.value)
    },
    onSubmit: (props) => event => {
      event.preventDefault()
      const newTodo = {
        id: props.todo.length,
        description: props.todo.description,
        outcome: props.todo.outcome,
        desire: props.todo.desire
        }

      props.updateTodos(prepend(newTodo, props.todo))
      props.updateTodoText('')
      console.log(props.todo)

    }
  })
)





const Form = ({todos, todo, handleChange, onSubmit}) => (
  <div>
    <h1>New Todo</h1>
    <form onSubmit={onSubmit}>
      <input value={todos.description} onChange={handleChange('description')} className="new-todo" placeholder="What needs to be done..." />
      <input value={todos.outcome} onChange={handleChange('outcome')} className="new-todo" placeholder="In order to..." />
      <input value={todos.desire} onChange={handleChange('desire')} className="new-todo" placeholder="Because I want to..." />
      <button>Save</button>
    </form>
  </div>
)

export default enhance(Form)
