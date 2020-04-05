import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { chain, find, includes, merge, toNumber, map } from 'lodash'
import Typography from '@material-ui/core/Typography'
import { PLAY_DAYS, PLAYTIME } from '~/data/constants'

// export const usePlayingAtRowStyles = makeStyles((theme) => ({}))

export const playingLookup = merge(
  chain(PLAYTIME).keyBy('id').mapValues('value').value(),
  chain(PLAY_DAYS)
    .keyBy((item) => 100 + item.id)
    .mapValues('value')
    .value()
)

export const playingSearchAndFilter = (
  selectedOptionIds,
  { playtime, playdays }
) => {
  const optionValues = map(selectedOptionIds, toNumber)
  return (
    includes(optionValues, playtime) || includes(optionValues, playdays + 100)
  )
}

export const PlayingAtRow = ({ rowData }) => {
  // const classes = usePlayingAtRowStyles()
  const { playtime, playdays } = rowData
  const playtimeString = (find(PLAYTIME, { id: playtime }) || {}).value
  const playDaysString = (find(PLAY_DAYS, { id: playdays }) || {}).value

  return (
    <div>
      <Typography>{playtimeString}</Typography>
      <Typography>{playDaysString}</Typography>
    </div>
  )
}
