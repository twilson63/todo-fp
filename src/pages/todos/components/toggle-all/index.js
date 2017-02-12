import React from 'react'

import { compose, withHandlers, setDisplayName } from 'recompose'

import { toggleAll } from './handlers'

const enhance = compose(
  setDisplayName('ToggleAll'),
  withHandlers({ toggleAll })
)
const ToggleAll = ({toggleAll}) => (
  <div>
    <input className="toggle-all" onChange={toggleAll} type="checkbox" />
    <label htmlFor="toggle-all">Mark all as complete</label>
  </div>
)

export default enhance(ToggleAll)
