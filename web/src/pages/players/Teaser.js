import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import villager from '~/assets/villager.png'
import textBubble from '~/assets/textBubble.svg'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '48px 0',
  },

  villagerImage: {
    width: '100%',
    backgroundImage: `url(${villager})`,
    backgroundSize: 'cover',
    backgroundColor: 'transparent',
    minHeight: '360px',
    height: '0',
    padding: '0',
    paddingBottom: 'calc(100% * 3 / 4)',
  },

  banner: {
    position: 'relative',
    height: '210px',
    padding: '60px',
  },

  text: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '80px 40px',
    [theme.breakpoints.down('md')]: {
      padding: '70px 40px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '50px 40px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '30px 40px',
    },
  },

  textBubble: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    marginTop: '20px',
  }
}))

export const Teaser = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Grid container>

        <Grid item xs={8}>
          <Typography variant='h2' component='h4'>Welcome, villager 🌻</Typography>
          <div className={classes.banner}>
            <img src={textBubble} className={classes.textBubble} />
            <p className={classes.text}>
              <Typography variant='h4' component='h2'>
                Here you can find a friends to play Animal Crossing online with.
              </Typography>
            </p>
          </div>
        </Grid>

        <Grid item xs={4}>
          <div className={classes.villagerImage} />
        </Grid>

      </Grid>
    </div>
  )
}
