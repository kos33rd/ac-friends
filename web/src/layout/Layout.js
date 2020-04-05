import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles'

import { Header } from './Header'
import { Footer } from './Footer'
import background from '~/assets/backgrounds/dots.png'

const useLayoutStyles = makeStyles((theme) => ({
  main: {
    maxWidth: 1280,
    margin: '0 auto',
    padding: '0 24px 48px',
    backgroundImage: `url(${background})`
  },
}))

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f7c539',
    },
    secondary: {
      main: '#9a6033',
    },
    background: {
      // default: '#E4E4E4',
      default: '#ebebeb',
    },
  },
  typography: {
    h2: {
      fontWeight: 800,
      letterSpacing: '0.01735em',
      fontFamily: 'Lato, Roboto, Arial',
    },
    h4: {
      fontWeight: 800,
      letterSpacing: '0.03735em',
      color: '#6d5e49',
      fontFamily: 'Lato, Roboto, Arial',
    },
  },
})

export const Layout = ({ children }) => {
  const classes = useLayoutStyles()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}
