import React, { useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import GroupIcon from '@material-ui/icons/Group'
import { makeStyles } from '@material-ui/core/styles'
import { IconButton } from '@material-ui/core'
import { useHistory, Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'

import { ProfileButton } from '~/layout/components/ProfileButton'
import { LogoutButton } from '~/layout/components/LogoutButton'
import { fetchProfile } from '~/data/stores/profile'

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
  },
}))

export const Header = () => {
  useEffect(() => {
    fetchProfile()
  }, [])
  const classes = useStyles()
  const history = useHistory()
  const navigateToPlayersList = () => history.push('/')
  const showLogout = history.location.pathname === '/profile'

  return (
    <AppBar position='relative'>
      <Toolbar className={classes.toolbar}>
        <IconButton
          className={classes.icon}
          color='secondary'
          onClick={navigateToPlayersList}
        >
          <GroupIcon />
        </IconButton>
        <Typography
          variant='h6'
          color='inherit'
          noWrap
          className={classes.title}
        >
          <Link component={RouterLink} to='/' color='secondary'>
            Animal Crossing: New Friends
          </Link>
        </Typography>
        {showLogout ? <LogoutButton /> : <ProfileButton />}
      </Toolbar>
    </AppBar>
  )
}
