import React from 'react'
import { map, prop, compose, filter, cond,
  reject, T, propEq, identity } from 'ramda'

import { Header, ToggleAll, Footer, TodoItem } from './components'

const active = location => todos => propEq('pathname', '/active', location)
const completed = location => todos => propEq('pathname', '/completed', location)

const Todos = (props) => (
  <section className="todoapp">
    <Header {...props} />
    <section className="main">
      <ToggleAll {...props} />
      <ul className="todo-list">
        {
          compose(
            map(todo => <TodoItem key={todo.id} todo={todo} {...props} />),
            cond([
              [completed(props.location), filter(propEq('completed', true))],
              [active(props.location), reject(propEq('completed', true))],
              [T, identity]
            ])
          )(prop('todos', props))
        }
      </ul>
    </section>
    <Footer {...props} />
  </section>

)

export default Todos
