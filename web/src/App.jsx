import React from "react";
import { hot } from 'react-hot-loader/root';
import { useStore } from 'effector-react'

import { Layout } from './layout/Layout'
import playersStore from './data/stores/players'
import profileStore from './data/stores/profile'


const App = () => {

  const profile = useStore(profileStore)
  const players = useStore(playersStore)
  return (
    <Layout>
      <h3>User profile:</h3>
      <pre>
        {JSON.stringify(profile, null, 2)}
      </pre>
      <h3>Public players list:</h3>
      <pre>
        {JSON.stringify(players, null, 2)}
      </pre>
    </Layout>);
}

export default hot(App);
