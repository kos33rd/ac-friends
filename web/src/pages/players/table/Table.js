import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TableContainer from '@material-ui/core/TableContainer'
import Paper from '@material-ui/core/Paper'
import { useStore } from 'effector-react'
import MaterialTable from 'material-table'
import { isEmpty } from 'lodash'

import playersStore, { fetchPlayers } from '~/data/stores/players'
import {
  NicknameRowRenderer,
  useNicknameRowStyles,
} from '~/pages/players/table/rows/NicknameRowRenderer'
import {
  FruitsRowRenderer,
  useFruitsRowStyles,
} from '~/pages/players/table/rows/FruitsRowRenderer'
import { $fruits, $fruitsIsLoading, fetchFruits } from '~/data/stores/fruits'
import {
  PlayingAtRowRenderer,
  usePlayingAtRowStyles,
} from '~/pages/players/table/rows/PlayingAtRowRenderer'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

export default function PlayersTable() {
  const classes = useStyles()
  const nicknameRowClasses = useNicknameRowStyles()
  const fruitsRowClasses = useFruitsRowStyles()
  const playingAtRowClasses = usePlayingAtRowStyles()

  const fruits = useStore($fruits)
  const fruitsIsLoading = useStore($fruitsIsLoading)
  const { list } = useStore(playersStore)

  useEffect(() => {
    fetchPlayers()
    if (!fruitsIsLoading && isEmpty(fruits)) {
      fetchFruits()
    }
  }, [])

  return (
    <TableContainer component={Paper}>
      <MaterialTable
        columns={[
          { title: '', render: NicknameRowRenderer(nicknameRowClasses) },
          { title: 'Friend Code', field: 'friend_code' },
          { title: 'Bumped', field: 'bump_date', type: 'date' },
          {
            title: 'Fruits',
            field: 'fruits',
            render: FruitsRowRenderer(fruits, fruitsRowClasses),
          },
          {
            title: 'Playing',
            render: PlayingAtRowRenderer(playingAtRowClasses),
          },
          { title: 'Comment', field: 'commentary' },
        ]}
        data={list}
        title='Public players list'
      />
    </TableContainer>
  )
}
