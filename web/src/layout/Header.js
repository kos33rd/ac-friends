import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CameraIcon from '@material-ui/icons/PhotoCamera';
import { makeStyles } from '@material-ui/core/styles'
import { GoogleLogin } from 'react-google-login'

import { GOOGLE_CLIENT_ID } from '../data/constants'
import { authorizeWithGoogle } from '../data/authorizeWithGoogle'
import api from '../data/api'
import { loadProfile } from '../data/stores/profile'
import { loadPlayers } from '../data/stores/players'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

export const Header = () => {
  const classes = useStyles();

  const handleAuthSuccess = (...args) => authorizeWithGoogle(...args)
    .then(() => {
      api.get('players')
        .then(res => loadPlayers(res.data))
        .catch(err => console.error('Error fetching players list', err))
      api.get('profile')
        .then(res => loadProfile(res.data))
        .catch(err => console.error('Error fetching user profile', err))
    })

  return (
    <AppBar position="relative">
      <Toolbar>
        <CameraIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap className={classes.title}>
          Animal Crossing: New Friends
        </Typography>
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Log In with Google"
          onSuccess={handleAuthSuccess}
          onFailure={handleAuthSuccess}
          cookiePolicy={'single_host_origin'}
        />
      </Toolbar>
    </AppBar>
  )
}

