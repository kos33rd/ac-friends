import React from "react";
import { hot } from 'react-hot-loader/root';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';

import api from './data/api';

const GOOGLE_CLIENT_ID = '810585960469-6t1dll32bf956ib0ia1q34kvncrr0m98.apps.googleusercontent.com'
const API_CLIENT_ID = 'AeHpsZrOk4pJxSzRCx6OV6k9HSU4M9q2QfM4EqAs'
const API_CLIENT_SECRET = '5M7qczd8UvuQA58rerF5rwAFrrezGyiNG4NwEDj7pxXjJX0fZwPIq7xS1OSyOaGqhrvnoVloyOW7FkcVdqwnB6F3aQXfgZ9yGZ82NIzKLjRrlit9ed3wgwL3UOjKBLGd'

const responseGoogle = (profileResponse) => {
  console.log('profileResponse', profileResponse);
  const googleAccessToken = profileResponse.accessToken
  api.post('auth/convert-token', {
    grant_type: 'convert_token',
    client_id: API_CLIENT_ID,
    client_secret: API_CLIENT_SECRET,
    backend: 'google-oauth2',
    token: googleAccessToken,
  })
    .then(({data}) => {
      localStorage.setItem('accessToken', data.access_token)
      api.get('sampleapi')
        .then(res => console.log('sampleapi', res))
        .catch(err => console.log('sampleapi err', err))

    })
    .catch(err => console.log('R', err))
}

class App extends React.Component {
  render() {
    return (<section>
      <h1>Animal Crossing: New Friends App scaffold here</h1>
      <GoogleLogin
        clientId={GOOGLE_CLIENT_ID}
        buttonText="Log In with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </section>);
  }
}

export default hot(App);
