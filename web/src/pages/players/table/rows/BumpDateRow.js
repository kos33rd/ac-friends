import React from 'react'
import Typography from '@material-ui/core/Typography'
import { formatDistanceToNow, format, parseISO } from 'date-fns'

export const BumpDateRow = ({ rowData }) => (
  <Typography
    title={format(parseISO(rowData.bump_date), 'dd.MM.yyyy HH:mm:ss')}
  >
    {formatDistanceToNow(parseISO(rowData.bump_date), { addSuffix: true })}
  </Typography>
)
