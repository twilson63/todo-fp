/* global test, expect */
import changeText from './'

let todos = [{id: 1, text: 'foo'}, {id: 2, text: 'bar'}]
const updateTodos = v => { todos = v }
const result = [
  {id: 1, text: 'beep'},
  {id: 2, text: 'bar'}]

test('changeText Todo', done => {
  changeText({todos, updateTodos})(1)({target: {value: 'beep'}})
  expect(todos).toEqual(result)
  done()
})
