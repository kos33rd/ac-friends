import { makeStyles } from '@material-ui/core/styles'
import Alert from '@material-ui/lab/Alert'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  alert: {
    margin: '16px 0',
  },
}))

export const PaddedAlert = (props) => {
  const classes = useStyles()
  return <Alert className={classes.alert} {...props} />
}
