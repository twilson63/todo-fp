/* global test, expect */
import editMode from './'

let todos = [{id: 1, text: 'foo'}, {id: 2, text: 'bar'}]
const updateTodos = v => { todos = v }
const result = [
  {id: 1, text: 'foo', edit: true},
  {id: 2, text: 'bar'}]

test('edit Mode Todo', done => {
  editMode({todos, updateTodos})(1)({})
  expect(todos).toEqual(result)
  done()
})
