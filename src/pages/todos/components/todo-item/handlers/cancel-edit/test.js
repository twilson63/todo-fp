/* global test, expect */
import cancelEdit from './'

let todos = [{id: 1, text: 'foo', edit: true}, {id: 2, text: 'bar', edit: false}]
const updateTodos = v => { todos = v }
const result = [
  {id: 1, text: 'foo', edit: false},
  {id: 2, text: 'bar', edit: false}]

test('cancelEdit Todo', done => {
  cancelEdit({todos, updateTodos})({})
  expect(todos).toEqual(result)
  done()
})
