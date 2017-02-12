import { reject, propEq } from 'ramda'

const clearCompleted = ({updateTodos, todos}) => e =>
  updateTodos(reject(propEq('completed', true), todos))

export default clearCompleted
