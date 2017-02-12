/* global test, expect */
import TodoModel from './'

test('TodoModel', done => {
  expect(TodoModel('foo').text).toEqual('foo')
  done()
})
