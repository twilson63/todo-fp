/* global test, expect */
import handleChange from './'

test('handle Change', done => {
  let todo = 'foo'
  const updateTodo = (v) => { todo = v }

  handleChange({todo, updateTodo})({target: {value: 'bar'}})
  expect(todo).toEqual("bar")
  done()
})
