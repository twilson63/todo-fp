import React from 'react'

import { propEq } from 'ramda'
import { Link } from 'react-router-dom'

const FilterButton = ({href, text, location}) => (
  <li>
    <Link to={href} className={propEq('pathname', href, location) ? 'selected' : ''}>{text}</Link>
  </li>
)

export default FilterButton
