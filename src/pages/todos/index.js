import React from 'react'
import { map, prop } from 'ramda'

import { Header, ToggleAll, Footer, TodoItem } from './components'

const Todos = (props) => (
  <section className="todoapp">
    <Header {...props} />
    <section className="main">
      <ToggleAll {...props} />
      <ul className="todo-list">
        {map(todo => <TodoItem key={todo.id} todo={todo} {...props} />, prop('todos', props))}
      </ul>
    </section>
    <Footer {...props} />
  </section>

)

export default Todos
