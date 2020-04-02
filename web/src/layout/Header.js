import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import GroupIcon from '@material-ui/icons/Group'
import { makeStyles } from '@material-ui/core/styles'
import { GoogleLogin } from 'react-google-login'
import { IconButton } from '@material-ui/core';

import { authorizeWithGoogle } from '../data/authorizeWithGoogle'
import api from '../data/api'
import { loadProfile } from '../data/stores/profile'

const useStyles = makeStyles((theme) => ({
  toolbarWrapper: {
    maxWidth: 1280,
    margin: '0 auto',
    display: 'flex',
  },
  toolbar: {
    flex: 1,
  },
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
    .then(() =>
      api.get('profile')
        .then(res => loadProfile(res.data))
        .catch(err => console.error('Error fetching user profile', err))
    )

  return (
    <AppBar position="relative">
      <Toolbar className={classes.toolbar}>
        <IconButton className={classes.icon} color='secondary'>
          <GroupIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" noWrap className={classes.title}>
          Animal Crossing: New Friends
        </Typography>
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Join us with Google"
          onSuccess={handleAuthSuccess}
          onFailure={handleAuthSuccess}
          cookiePolicy={'single_host_origin'}
        />
      </Toolbar>
    </AppBar>
  )
}
