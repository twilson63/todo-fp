import React from 'react'
import NewTodo from '../new-todo'
import { Link } from 'react-router-dom'

const Header = (props) => (
  <header className="header">
    <h1>todos</h1>
    <Link to="/newform" >New Todo</Link>
    <NewTodo {...props} />
  </header>
)

export default Header
