import { path } from 'ramda'

const handleChange = ({todo, updateTodo}) =>
  e => updateTodo(path(['target', 'value'], e))

export default handleChange
