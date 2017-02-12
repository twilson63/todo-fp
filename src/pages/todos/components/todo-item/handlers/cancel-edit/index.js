import { map, set, lensProp } from 'ramda'

const cancelEdit = ({todos, updateTodos}) => e =>
  updateTodos(map(set(lensProp('edit'), false), todos))

export default cancelEdit
