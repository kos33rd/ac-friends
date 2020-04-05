import React, { useEffect } from 'react'
import { useStore } from 'effector-react'
import { GoogleLogin } from 'react-google-login'
import CircularProgress from '@material-ui/core/CircularProgress'
import FaceIcon from '@material-ui/icons/Face'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'

import { authorizeWithGoogle } from '~/data/authorizeWithGoogle'
import { $isAuthorized, fetchProfile } from '~/data/stores/profile'

const GoToProfileButton = () => {
  const history = useHistory()
  const navigateToProfile = () => history.push('/profile')

  return (
    <Button
      color='secondary'
      startIcon={<FaceIcon />}
      onClick={navigateToProfile}
    >
      My Profile
    </Button>
  )
}

export const ProfileButton = () => {
  useEffect(() => {
    fetchProfile()
  }, [])

  const isAuthorized = useStore($isAuthorized)
  const profileIsLoaded = !useStore(fetchProfile.pending)

  const handleAuthSuccess = (response) => {
    authorizeWithGoogle(response).then(fetchProfile)
  }

  const handleAuthFailure = () => {
    alert('Ouch! Something went wrong during Google authorization process :(')
  }

  return profileIsLoaded ? (
    isAuthorized ? (
      <GoToProfileButton />
    ) : (
      <GoogleLogin
        clientId={GOOGLE_CLIENT_ID}
        buttonText='Join us with Google'
        onSuccess={handleAuthSuccess}
        onFailure={handleAuthFailure}
        cookiePolicy={'single_host_origin'}
      />
    )
  ) : (
    <CircularProgress />
  )
}
