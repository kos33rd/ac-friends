import React from 'react'
import Button from '@material-ui/core/Button'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const logout = () => {
  localStorage.removeItem('accessToken')
  window.location.replace('/')
}

export const LogoutButton = () => (
  <Button color='secondary' onClick={logout} startIcon={<ExitToAppIcon/>}>Log Out</Button>
)
