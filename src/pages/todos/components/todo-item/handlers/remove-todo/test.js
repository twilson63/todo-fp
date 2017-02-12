/* global test, expect */
import removeTodo from './'

let todos = [{id: 1, text: 'foo'}, {id: 2, text: 'bar'}]
const updateTodos = v => { todos = v }
const result = [{id: 2, text: 'bar'}]

test('remove Todo', done => {
  removeTodo({todos, updateTodos})(1)({})
  expect(todos).toEqual(result)
  done()
})
