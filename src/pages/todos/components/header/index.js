import React from 'react'
import NewTodo from '../new-todo'
import { Link } from 'react-router-dom'

const Header = (props) => (
  <header className="header">
    <h1>todos</h1>
    <Link to="/form/new" >New Todo</Link>
    <NewTodo {...props} />
  </header>
)

export default Header
