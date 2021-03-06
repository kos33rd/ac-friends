import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { useStore } from 'effector-react'
import { CircularProgress } from '@material-ui/core'

import villager3 from '~/assets/villager3.png'
import villager2 from '~/assets/villager2.png'
import textBubble from '~/assets/textBubble.svg'
import { $profile, $profileIsLoading } from '~/data/stores/profile'

const villagers = [villager3, villager2]
const villager = villagers[Math.floor(Math.random() * villagers.length)]

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
    cursor: 'pointer',
    height: '210px',
    padding: '60px',
  },

  bubbleTextWrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '90px 40px 0',
    [theme.breakpoints.down('sm')]: {
      padding: '70px 40px 0',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '40px 40px 0',
    },
  },

  bubbleText: {
    [theme.breakpoints.down('md')]: {
      fontSize: '1.9rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
    },
  },

  textBubble: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    marginTop: '20px',
  },

  username: {
    color: '#25a417',
  },
}))

const Username = ({ username }) => {
  const classes = useStyles()

  return <span className={classes.username}>{username}</span>
}
const WelcomeText = () => {
  const profile = useStore($profile)
  const profileIsLoading = useStore($profileIsLoading)

  if (profileIsLoading) {
    return <CircularProgress size={64} />
  }

  return (
    <Typography variant='h2' component='h4'>
      Welcome, <Username username={profile.nickname || 'villager'} /> 🌻
    </Typography>
  )
}

const hints = [
  'Here you can find a friends to play Animal Crossing online with.',
  'You can join us - just log in with Google, fill up your profile and make it visible for everyone.',
  'You can place you profile at top of the list - just click "Bump Me Up!" on profile page',
]

export const Teaser = () => {
  const classes = useStyles()
  const [hintIndex, setHintIndex] = useState(0)

  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item xs={8}>
          <WelcomeText />
          <div
            className={classes.banner}
            onClick={() => setHintIndex(hintIndex + 1)}
          >
            <img src={textBubble} className={classes.textBubble} />
            <div className={classes.bubbleTextWrap}>
              <Typography
                variant='h4'
                component='h2'
                className={classes.bubbleText}
              >
                {hints[hintIndex % hints.length]}
              </Typography>
            </div>
          </div>
        </Grid>

        <Grid item xs={4}>
          <div className={classes.villagerImage} />
        </Grid>
      </Grid>
    </div>
  )
}
