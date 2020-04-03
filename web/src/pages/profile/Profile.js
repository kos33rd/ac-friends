import React from 'react'
import { useStore } from 'effector-react'
import { makeStyles } from '@material-ui/core/styles'
import { CircularProgress } from '@material-ui/core'

import { $profileIsLoading } from '~/data/stores/profile'
import { ProfilePaper } from '~/pages/profile/ProfilePaper'
import timmy_nook from '~/assets/timmy_nook.png'
import tommy_nook from '~/assets/tommy_nook.png'

const useStyles = makeStyles((theme) => ({
  page: {
    position: 'relative',
  },
  rightBackdrop: {
    position: 'absolute',
    left: 'calc(65%)',
    zIndex: '-1',
    transform: 'rotate(35deg)',
    height: 600,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  leftBackdrop: {
    position: 'absolute',
    right: 'calc(65%)',
    zIndex: '-1',
    transform: 'rotate(-35deg)',
    height: 600,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}))

const Profile = () => {
  const classes = useStyles()
  const profileIsLoading = useStore($profileIsLoading)

  if (profileIsLoading) {
    return <CircularProgress />
  }

  return (
    <div className={classes.page}>
      <img src={timmy_nook} className={classes.rightBackdrop} />
      <img src={tommy_nook} className={classes.leftBackdrop} />
      <ProfilePaper />
    </div>
  )
}

export default Profile
