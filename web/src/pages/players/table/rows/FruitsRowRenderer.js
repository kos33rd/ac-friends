import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { find, map, toUpper } from 'lodash'
import Typography from '@material-ui/core/Typography'

export const useFruitsRowStyles = makeStyles((theme) => ({
  column: {
    display: 'flex',
  },
}))

export const FruitsRowRenderer = (fruits, classes) => (rowData) => {
  const { fruits: playerFruits } = rowData
  const fruitsString = map(
    playerFruits,
    (id) => (find(fruits, { id }) || {}).icon
  )

  return (
    <div className={classes.column}>
      <Typography>{fruitsString}</Typography>
    </div>
  )
}
