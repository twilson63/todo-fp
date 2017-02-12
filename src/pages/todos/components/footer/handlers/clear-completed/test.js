/* global test, expect */
import clearCompleted from './'

test('handle clearCompleted', done => {
  let todos = [{completed: true}]
  const updateTodos = (v) => {
    todos = v
  }

  clearCompleted({todos, updateTodos})({})
  expect(todos).toEqual([])
  done()
})
