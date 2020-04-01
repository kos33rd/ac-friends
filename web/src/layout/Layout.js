import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles'

import { Header } from './Header'
import { Footer } from './Footer'


const useLayoutStyles = makeStyles((theme) => ({
  main: {
    maxWidth: 1280,
    margin: '0 auto',
  }
}))

export const Layout = ({ children }) => {
  const classes = useLayoutStyles()
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <main className={classes.main}>
        {children}
      </main>
      <Footer />
    </React.Fragment>
  )

}
