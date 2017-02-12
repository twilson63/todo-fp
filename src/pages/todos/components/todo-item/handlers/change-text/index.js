import { map, propEq, ifElse, set, lensProp, path, identity } from 'ramda'

const changeText = ({updateTodos, todos}) => id => e =>
  updateTodos(
    map(
      ifElse(propEq('id', id),
        set(lensProp('text'), path(['target', 'value'], e)),
        identity
      ),
      todos
    )
  )

export default changeText
