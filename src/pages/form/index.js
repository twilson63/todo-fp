import React from 'react'
import { Link } from 'react-router-dom'
import { map, prop, filter, cond,
  reject, T, propEq, identity, prepend } from 'ramda'

import { compose, withState, withHandlers} from 'recompose'

const enhance = compose(
  withState('todos', 'updateTodo', []),
  withState('newTodoText', 'updateTodoText', ''),
  withHandlers({
    handleChange: ({updateTodos, todos}) => field => event => {
      console.log(event)
      let val = {todos}
      val[field] = event.target.value
      updateTodos({val})
      console.log(field)
      // let pet = {
      //          ...this.state.pet
      //      }
      //      pet[field] = e.target.value
      //      this.setState({pet})
      //  }
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
      <input value={todos.description} onChange={handleChange(todos.description)} className="new-todo" placeholder="What needs to be done..." />
      <input value={todos.outcome} onChange={handleChange(todos.outcome)} className="new-todo" placeholder="In order to..." />
      <input value={todos.desire} onChange={handleChange(todos.desire)} className="new-todo" placeholder="Because I want to..." />
      <button>Save</button>
    </form>
    <button><Link to="/">Cancel</Link></button>

  </div>
)

export default enhance(Form)
