import React, { useEffect } from 'react'

import { fetchPlayers } from '~/data/stores/players'
import PlayersTable from './Table'
import { Teaser } from './Teaser'


const Players = () => {

  useEffect(() => {
    fetchPlayers()
  }, [])

  return (
    <React.Fragment>
      <Teaser />
      <h3>Public players list</h3>
      <PlayersTable />
    </React.Fragment>
  )
}

export default Players
