const TodoModel = (text) => ({
  text,
  completed: false,
  edit: false,
  id: (new Date()).toISOString() + Math.random()
})

export default TodoModel
