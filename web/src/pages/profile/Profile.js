import React from 'react'
import { useStore } from 'effector-react'
import profileStore from '~/data/stores/profile'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import { Field, Form } from 'react-final-form'
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui'
import { CircularProgress } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import PublishIcon from '@material-ui/icons/Publish';

const useStyles = makeStyles((theme) => ({
  formPaper: {
    margin: '64px auto',
    padding: 32,
    maxWidth: 640,
  },
  form: {
    marginTop: 32,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  field: {
    marginBottom: 32,
  },
  fieldsGroup: {
    margin: '16px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
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
  const onProfileSubmit = (profileData) => console.log('Profile submitted', profileData)
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

        <Form
          onSubmit={onProfileSubmit}
          initialValues={profile}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className={classes.form}>
              <FormControlLabel
                control={<Switch name="is_visible" color="primary" />}
                label="Show profile info in players table"
                className={classes.field}
              />
              <div className={classes.fieldsGroup}>
                <Field
                  name="nickname"
                  component={TextField}
                  label="Your nickname"
                  className={classes.field}
                  variant="outlined"
                />
                <Field
                  name="nintendo_id"
                  component={TextField}
                  label="Your Nintendo ID"
                  className={classes.field}
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <Field
                  name="language"
                  component={TextField}
                  label="Preferable language"
                  className={classes.field}
                  variant="outlined"
                />
                <Field
                  name="commentary"
                  component={TextField}
                  label="Free text visible to other players"
                  placeholder='Commentary'
                  className={classes.field}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </div>
              <Button variant='contained' color='primary' type='submit'>
                Save
              </Button>
            </form>
          )}
        />
      </Paper>
      <pre>
        {JSON.stringify(profile, null, 2)}
        </pre>

    </React.Fragment>
  )
}

export default Profile
