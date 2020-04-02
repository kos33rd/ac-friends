import api from './api';
import { API_CLIENT_ID, API_CLIENT_SECRET } from './constants'

export const authorizeWithGoogle = (profileResponse) => {
  console.log('Authorization provider client profile:', profileResponse);
  if(profileResponse.error) {
    console.error('Google authorization preflight failed:', profileResponse.error)
    return Promise.reject()
  }

  const googleAccessToken = profileResponse.accessToken
  return api.post('auth/convert-token', {
    grant_type: 'convert_token',
    client_id: API_CLIENT_ID,
    client_secret: API_CLIENT_SECRET,
    backend: 'google-oauth2',
    token: googleAccessToken,
  })
    .then(({ data }) => {
      localStorage.setItem('accessToken', data.access_token)
      return data
    })
    .catch(err => console.error('Authorization failed', err))
}
