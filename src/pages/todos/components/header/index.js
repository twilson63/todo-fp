import React from 'react'
import NewTodo from '../new-todo'

const Header = (props) => (
  <header className="header">
    <h1>todos</h1>
    <NewTodo {...props} />
  </header>
)

export default Header
