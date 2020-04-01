import React, { useState } from "react";
import { hot } from 'react-hot-loader/root';
import { GoogleLogin } from 'react-google-login';

import api from './data/api';
import { GOOGLE_CLIENT_ID } from './data/constants'
import { authorizeWithGoogle } from './data/authorizeWithGoogle'


const App = () => {
  const [profile, setProfile] = useState()
  const [players, setPlayers] = useState()

  const handleAuthSuccess = (...args) => authorizeWithGoogle(...args)
    .then(() => {
      api.get('players')
        .then(res => setPlayers(res.data))
        .catch(err => console.error('Error fetching players list', err))
      api.get('profile')
        .then(res => setProfile(res.data))
        .catch(err => console.error('Error fetching user profile', err))
    })

  return (<section>
    <h1>Animal Crossing: New Friends App scaffold here</h1>
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID}
      buttonText="Log In with Google"
      onSuccess={handleAuthSuccess}
      onFailure={handleAuthSuccess}
      cookiePolicy={'single_host_origin'}
    />

    <h3>User profile:</h3>
    <pre>
      {JSON.stringify(profile, null, 2)}
    </pre>

    <h3>Public players list:</h3>
    <pre>
      {JSON.stringify(players, null, 2)}
    </pre>

  </section>);
}

export default hot(App);
