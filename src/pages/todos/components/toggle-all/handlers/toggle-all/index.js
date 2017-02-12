import { map, set, lensProp } from 'ramda'

const toggleAll = ({updateTodos, todos}) => e =>
  updateTodos(map(set(lensProp('completed'), true), todos))

export default toggleAll
