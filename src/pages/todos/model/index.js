const TodoModel = (todoData) => ({
  ...todoData,
  completed: false,
  edit: false,
  id: (new Date()).toISOString() + Math.random()
})

export default TodoModel
