import React, { useEffect } from 'react'
import { useStore } from 'effector-react'
import { GoogleLogin } from 'react-google-login'
import CircularProgress from '@material-ui/core/CircularProgress'
import FaceIcon from '@material-ui/icons/Face'
import { useHistory } from 'react-router-dom'

import { authorizeWithGoogle } from '~/data/authorizeWithGoogle'
import profileStore, { profileIsLoading, profileLoaded, profileLoadFailed } from '~/data/stores/profile'
import api from '~/data/api'
import Button from '@material-ui/core/Button'


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
    profileIsLoading()
    api.get('profile')
      .then(res => profileLoaded(res.data))
      .catch(err => profileLoadFailed(err))
  }, [])

  const profile = useStore(profileStore)

  const handleAuthSuccess = (...args) => authorizeWithGoogle(...args)
    .then(() => {
      profileIsLoading()
      return api.get('profile')
        .then(res => profileLoaded(res.data))
        .catch(err => profileLoadFailed(err))
    })

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
