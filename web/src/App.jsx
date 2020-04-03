import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Layout } from '~/layout/Layout'
import Players from '~/pages/players/Players'
import Profile from '~/pages/profile/Profile'

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Players />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
      </Switch>
    </Layout>
  </Router>
)

export default hot(App)
