import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TableContainer from '@material-ui/core/TableContainer'
import Paper from '@material-ui/core/Paper'
import { useStore } from 'effector-react'
import MaterialTable from 'material-table'
import { isEmpty } from 'lodash'

import playersStore, { fetchPlayers } from '~/data/stores/players'
import { NicknameRow } from '~/pages/players/table/rows/NicknameRow'

import { $fruits, $fruitsIsLoading, fetchFruits } from '~/data/stores/fruits'
import Typography from '@material-ui/core/Typography'
import { Checkbox } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import {
  fruitsLookup,
  FruitsRow,
  fruitsSearchAndFilter,
} from '~/pages/players/table/rows/FruitsRow'
import {
  PlayingAtRow,
  playingLookup,
  playingSearchAndFilter,
} from '~/pages/players/table/rows/PlayingAtRow'
import { CommentaryRow } from '~/pages/players/table/rows/CommentaryRow'
import { BumpDateRow } from '~/pages/players/table/rows/BumpDateRow'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
  },
  titleText: {
    flex: '1',
    margin: '16px',
  },
})

export default function PlayersTable() {
  const classes = useStyles()

  const fruits = useStore($fruits)
  const fruitsIsLoading = useStore($fruitsIsLoading)
  const { list } = useStore(playersStore)

  useEffect(() => {
    fetchPlayers()
    if (!fruitsIsLoading && isEmpty(fruits)) {
      fetchFruits()
    }
  }, [])

  const [filteringIsEnabled, setFilteringIsEnabled] = useState(false)

  return (
    <TableContainer component={Paper}>
      <div className={classes.title}>
        <Typography variant='h6' className={classes.titleText}>
          Public players list
        </Typography>
        <FormControlLabel
          label='Show filters'
          control={
            <Checkbox
              value={filteringIsEnabled}
              onChange={(val) => setFilteringIsEnabled(!filteringIsEnabled)}
            />
          }
        />
      </div>
      <MaterialTable
        columns={[
          {
            title: '',
            render: (rowData) => <NicknameRow rowData={rowData} />,
            filtering: false,
          },
          { title: 'Friend Code', field: 'friend_code', filtering: false },
          {
            title: 'Bumped',
            field: 'bump_date',
            type: 'date',
            render: (rowData) => <BumpDateRow rowData={rowData} />,
            filtering: false,
          },
          {
            title: 'Fruits',
            field: 'fruits',
            render: (rowData) => (
              <FruitsRow rowData={rowData} fruits={fruits} />
            ),
            lookup: fruitsLookup(fruits),
            customFilterAndSearch: fruitsSearchAndFilter,
          },
          {
            title: 'Playing',
            render: (rowData) => <PlayingAtRow rowData={rowData} />,
            lookup: playingLookup,
            customFilterAndSearch: playingSearchAndFilter,
          },
          {
            title: 'Comment',
            field: 'commentary',
            render: (rowData) => <CommentaryRow rowData={rowData} />,
            filtering: false,
          },
        ]}
        data={list}
        options={{
          search: false,
          toolbar: false,
          filtering: filteringIsEnabled,
          paging: false,
        }}
      />
    </TableContainer>
  )
}
