import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import GroupIcon from '@material-ui/icons/Group'
import { makeStyles } from '@material-ui/core/styles'
import { GoogleLogin } from 'react-google-login'
import { IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { ProfileButton } from '~/layout/components/ProfileButton'

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
  const history = useHistory()
  const navigateToPlayersList = () => history.push('/')

  return (
    <AppBar position="relative">
      <Toolbar className={classes.toolbar}>
        <IconButton className={classes.icon} color='secondary' onClick={navigateToPlayersList}>
          <GroupIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" noWrap className={classes.title}>
          Animal Crossing: New Friends
        </Typography>
        <ProfileButton />
      </Toolbar>
    </AppBar>
  )
}
