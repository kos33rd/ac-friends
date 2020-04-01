import React from "react";
import { hot } from 'react-hot-loader/root';

import { Layout } from './layout/Layout'
import Players from './pages/players/Players'
import Profile from '~/pages/profile/Profile'


const App = () => (
    <Layout>
      <Players />
      <Profile/>
    </Layout>
)

export default hot(App);
