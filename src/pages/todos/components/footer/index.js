import React from 'react'
import ItemsLeft from '../items-left'
import FilterButton from '../filter-button'

import { compose, withHandlers, setDisplayName }  from 'recompose'

import { clearCompleted } from './handlers'

const enhance = compose(
  setDisplayName('Footer'),
  withHandlers({ clearCompleted })
)

const Footer = (props) => (
  <footer className="footer">
    <ItemsLeft {...props} />
    <ul className="filters">
      <FilterButton text="All" href="/" {...props} />
      <FilterButton text="Active" href="/active" {...props} />
      <FilterButton text="Completed" href="/completed" {...props} />
    </ul>
    <button onClick={props.clearCompleted} className="clear-completed">Clear completed</button>
  </footer>
)

export default enhance(Footer)
