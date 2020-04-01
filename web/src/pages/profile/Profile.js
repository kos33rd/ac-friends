import React from 'react'
import { useStore } from 'effector-react'
import profileStore from '~/data/stores/profile'


const Profile = () => {

  const profile = useStore(profileStore)

  return (
    <React.Fragment>
      <h3>User profile:</h3>
      <pre>
        {JSON.stringify(profile, null, 2)}
      </pre>

    </React.Fragment>
  )
}

export default Profile
