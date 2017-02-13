import React from 'react'
import { Link } from 'react-router-dom'
import TodoModel from '../todos/model'
import { map, prop, filter, cond,
  reject, T, propEq, identity, prepend } from 'ramda'

import { compose, withState, withHandlers} from 'recompose'

const enhance = compose(
  withState('todoData', 'updateTodoData', {}),
  withHandlers({
    handleChange: ({updateTodoData, todoData}) => (field) => event => {
      console.log(event)
      let val = {...todoData}
      val[field] = event.target.value
      updateTodoData(val)
    },
    onSubmit: (props) => event => {
      event.preventDefault()
      props.updateTodos(prepend(TodoModel(props.todoData), props.todos))
      props.updateTodoData({})
      props.push("/")
    }
  })
)

const Form = ({todos, todoData, handleChange, onSubmit}) => (
  <div>
    <h1>New Todo</h1>
    <form onSubmit={onSubmit}>
      <input value={todoData.description} onChange={handleChange("description")} className="new-todo" placeholder="What needs to be done..." />
      <input value={todoData.outcome} onChange={handleChange("outcome")} className="new-todo" placeholder="In order to..." />
      <input value={todoData.desire} onChange={handleChange("desire")} className="new-todo" placeholder="Because I want to..." />
      <button>Save</button>
    </form>
    <button><Link to="/">Cancel</Link></button>

  </div>
)

export default enhance(Form)
