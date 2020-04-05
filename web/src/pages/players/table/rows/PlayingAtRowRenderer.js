import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { find, map, toUpper } from 'lodash'
import Typography from '@material-ui/core/Typography'
import { PLAY_DAYS, PLAYTIME } from '~/data/constants'

export const usePlayingAtRowStyles = makeStyles((theme) => ({}))

export const PlayingAtRowRenderer = (classes) => (rowData) => {
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
