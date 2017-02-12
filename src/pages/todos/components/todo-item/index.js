import React from 'react'

import { propEq, prop } from 'ramda'
import { compose, withHandlers, setDisplayName } from 'recompose'

import { toggleComplete, editMode, removeTodo,
  cancelEdit, changeText } from './handlers'

const enhance = compose(
  setDisplayName('TodoItem'),
  withHandlers({ toggleComplete, editMode, cancelEdit, changeText, removeTodo })
)

const TodoItem = ({todo, toggleComplete, editMode, cancelEdit,
changeText, removeTodo}) => (
  <li className={`${propEq('completed', true, todo) ? 'completed' : ''}
    ${propEq('edit', true, todo) ? 'editing' : ''}
  `}>
    <div className="view">
      <input className="toggle" type="checkbox"
        checked={propEq('completed', true, todo)}
        onChange={toggleComplete(prop('id', todo))}
      />
      <label onDoubleClick={editMode(todo.id)}>{todo.text}</label>
      <button onClick={removeTodo(todo.id)} className="destroy"></button>
    </div>
    <input
      value={todo.text}
      onChange={changeText(todo.id)}
      onBlur={cancelEdit}
      className="edit"
    />
  </li>
)

export default enhance(TodoItem)
