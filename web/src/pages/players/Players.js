import React from 'react'

import PlayersTable from './table/Table'
import { Teaser } from './Teaser'

const Players = () => (
  <React.Fragment>
    <Teaser />
    <PlayersTable />
  </React.Fragment>
)

export default Players
