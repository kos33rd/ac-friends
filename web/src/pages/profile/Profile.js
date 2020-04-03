import React from 'react'
import { useStore } from 'effector-react'
import profileStore from '~/data/stores/profile'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import { CircularProgress } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import { ProfileForm } from '~/pages/profile/ProfileForm'

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
  bumpIcon: {

  }
}))


const Profile = () => {

  const classes = useStyles()
  const profile = useStore(profileStore)
  const onBumpClick = () => console.log('Profile bumped up')

  if (!profile.isLoaded) {
    return <CircularProgress />
  }

  return (
    <React.Fragment>

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
        <ProfileForm/>
      </Paper>
    </React.Fragment>
  )
}

export default Profile
