import { map, propEq, ifElse, set, lensProp, identity, prop } from 'ramda'

const toggleComplete = ({todos, updateTodos}) => id => e =>
  updateTodos(map(todo => ifElse(
    propEq('id', id),
    set(lensProp('completed'), !prop('completed', todo)),
    identity)(todo), todos)
 )

export default toggleComplete
