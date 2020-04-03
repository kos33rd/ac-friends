import React, { useEffect } from 'react'
import { useStore } from 'effector-react'
import { GoogleLogin } from 'react-google-login'
import CircularProgress from '@material-ui/core/CircularProgress'
import FaceIcon from '@material-ui/icons/Face'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'

import { authorizeWithGoogle } from '~/data/authorizeWithGoogle'
import profileStore, { fetchProfile } from '~/data/stores/profile'


const GoToProfileButton = () => {
  const history = useHistory()
  const navigateToProfile = () => history.push('/profile')

  return (
    <Button color='secondary' startIcon={<FaceIcon/>} onClick={navigateToProfile}>
      My Profile
    </Button>
  )
}


export const ProfileButton = () => {
  useEffect(() => {
    fetchProfile()
  }, [])

  const profile = useStore(profileStore)

  const handleAuthSuccess = (...args) => authorizeWithGoogle(...args)
    .then(fetchProfile)

  return (
    profile.isLoading
    ? <CircularProgress />
    : profile.isAuthorized
      ? <GoToProfileButton />
      : <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Join us with Google"
          onSuccess={handleAuthSuccess}
          onFailure={handleAuthSuccess}
          cookiePolicy={'single_host_origin'}
        />
  )
}
