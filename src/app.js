import React from 'react'

import { HashRouter as Router, Route } from 'react-router-dom'

import { compose, withState } from 'recompose'

import Todos from './pages/todos'
import Form from './pages/form'
import Footer from './footer'

const enhance = compose(
  withState('todos', 'updateTodos', [])
)

const App = props => (
  <Router>
  <div>
    <Route exact path='/' component={(routerProps) => <Todos {...props} {...routerProps} />} />
    <Route exact path='/form/new' component={(routerProps) => <Form {...props} {...routerProps} />} />
    <Route path='/form/:id/edit' component={(routerProps) => {
      // find todo based on location.params.id
      const { id } = routerProps.location.params.id
      const { todos } = props 
      const todo = find(propEq('id', id), todos))

      return <Form todo={todo} todos={todos} {...props} {...routerProps} />
    } />

    <Footer />
  </div>
  </Router>
)

export default enhance(App)
