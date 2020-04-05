import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import { ProfileForm } from '~/pages/profile/ProfileForm'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  formPaper: {
    margin: '64px auto',
    padding: 32,
    maxWidth: 640,
  },
  divider: {
    margin: '6px 0',
  },
  profile: {
    display: 'flex',
  },
  profileText: {
    flex: '1',
  },
  bumpIcon: {},
}))

export const ProfilePaper = () => {
  const classes = useStyles()

  const onBumpClick = () => console.log('Profile bumped up')

  return (
    <Paper elevation={3} className={classes.formPaper}>
      <div className={classes.profile}>
        <Typography variant='h3' className={classes.profileText}>
          My profile
        </Typography>

        <Button
          className={classes.bumpIcon}
          color='default'
          onClick={onBumpClick}
        >
          Bump me up
        </Button>
      </div>

      <Divider className={classes.divider} />

      <Typography variant='subtitle1'>
        While visibility toggle is switched off, no one can see you
      </Typography>
      <ProfileForm />
    </Paper>
  )
}
