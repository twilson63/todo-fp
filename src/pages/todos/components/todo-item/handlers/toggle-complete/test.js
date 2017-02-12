/* global test, expect */
import toggleComplete from './'

let todos = [{id: 1, text: 'foo'}, {id: 2, text: 'bar'}]
const updateTodos = v => { todos = v }
const result = [{id: 1, text: 'foo', completed: true}, {id: 2, text: 'bar'}]

test('toggle Todo Complete', done => {
  toggleComplete({todos, updateTodos})(1)({})
  expect(todos).toEqual(result)
  done()
})
