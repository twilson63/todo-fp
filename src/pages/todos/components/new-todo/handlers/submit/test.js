/* global test, expect */
import handleSubmit from './'

let todos = [{text: 'foo'}, {text: 'bar'}]
const updateTodos = v => { todos = v }

test('handle Submit', done => {
  let todo = 'foo'
  const updateTodo = (v) => { todo = v }

  handleSubmit({todos, updateTodos, todo, updateTodo})({
    preventDefault: () => null
  })
  expect(todos.length).toBe(3)
  expect(todo).toEqual('')
  done()
})
