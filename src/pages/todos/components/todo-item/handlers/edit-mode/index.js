import { map, ifElse, propEq, set, lensProp, identity } from 'ramda'

const editMode = ({todos, updateTodos}) => id => e =>
  updateTodos(map(
    ifElse(propEq('id', id),
      set(lensProp('edit'), true),
      identity
    ),
  todos))

export default editMode
