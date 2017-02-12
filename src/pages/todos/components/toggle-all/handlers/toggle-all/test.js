/* global test, expect */
import toggleAll from './'

let todos = [{text: 'foo'}, {text: 'bar'}]
const updateTodos = v => { todos = v }
const result = [{text: 'foo', completed: true}, {text: 'bar', completed: true}]

test('ok', done => {
  toggleAll({updateTodos, todos})({})
  expect(todos).toEqual(result)
  done()
})
