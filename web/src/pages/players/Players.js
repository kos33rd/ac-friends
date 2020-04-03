import React from 'react'

import PlayersTable from './Table'
import { Teaser } from './Teaser'

const Players = () => (
  <React.Fragment>
    <Teaser />
    <h3>Public players list</h3>
    <PlayersTable />
  </React.Fragment>
)

export default Players
