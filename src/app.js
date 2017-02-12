import React from 'react'

import { compose, withState } from 'recompose'

import Todos from './pages/todos'
import Footer from './footer'

const enhance = compose(
  withState('todos', 'updateTodos', [])
)

const App = props => (
  <div>
    <Todos {...props} />
    <Footer />
  </div>
)

export default enhance(App)
