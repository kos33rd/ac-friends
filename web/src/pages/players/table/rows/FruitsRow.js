import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  chain,
  find,
  includes,
  intersection,
  isEmpty,
  map,
  merge,
  toNumber,
} from 'lodash'
import Typography from '@material-ui/core/Typography'

export const useFruitsRowStyles = makeStyles((theme) => ({
  column: {
    display: 'flex',
  },
}))

export const fruitsLookup = (fruits) =>
  chain(fruits).keyBy('id').mapValues('name').value()

export const fruitsSearchAndFilter = (selectedOptionIds, { fruits }) => {
  const optionValues = map(selectedOptionIds, toNumber)
  return !isEmpty(intersection(optionValues, fruits))
}

export const FruitsRow = ({ rowData, fruits }) => {
  const classes = useFruitsRowStyles()
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
