import { prepend, trim, prop } from 'ramda'
import TodoModel from '../../../../model'

const handleSubmit = ({todos, updateTodos, updateTodo, todo}) => e => {
  e.preventDefault()

  if (prop('length', trim(todo)) > 0) {
    updateTodos(prepend(TodoModel(trim(todo)), todos))
  }

  updateTodo('')
}

export default handleSubmit
