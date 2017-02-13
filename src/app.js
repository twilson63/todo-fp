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
    <Route exact path='/newform' component={(routerProps) => <Form {...props} {...routerProps} />} />
    <Footer />
  </div>
  </Router>
)

export default enhance(App)
