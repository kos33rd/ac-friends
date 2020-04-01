import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles'

import { Header } from './Header'
import { Footer } from './Footer'


const useLayoutStyles = makeStyles((theme) => ({
  main: {
    maxWidth: 1280,
    margin: '0 auto',
    padding: '0 24px',
  }
}))

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f7c539'
    },
    secondary: {
      main: '#9a6033'
    },
  },
})

export const Layout = ({ children }) => {
  const classes = useLayoutStyles()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
        <main className={classes.main}>
          {children}
        </main>
      <Footer />
    </ThemeProvider>
  )
}
