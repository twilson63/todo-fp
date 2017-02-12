import { reject, propEq } from 'ramda'

const removeTodo = ({todos, updateTodos}) => id => e =>
  updateTodos(reject(propEq('id', id), todos))

export default removeTodo
