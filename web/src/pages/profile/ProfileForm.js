import React from 'react'
import { Field, Form } from 'react-final-form'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '~/pages/profile/components/Switch'
import { TextField } from 'final-form-material-ui'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { useStore } from 'effector-react'
import { pick, mapValues, join, get, identity } from 'lodash'
import { FORM_ERROR } from 'final-form'
import CircularProgress from '@material-ui/core/CircularProgress'

import { $profile, updateProfile } from '~/data/stores/profile'
import { PaddedAlert } from '~/pages/profile/components/PaddedAlert'

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
    marginBottom: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
}))

export const ProfileForm = () => {
  const classes = useStyles()
  const profile = useStore($profile)

  const onProfileSubmit = (profileData) =>
    updateProfile(profileData)
      .then(
        (resp) =>
          new Promise((resolve) => setTimeout(() => resolve(resp), 1500))
      )
      .catch((error) => {
        if (error.response) {
          const fieldsWithErrors = get(error, 'response.data')
          return mapValues(fieldsWithErrors, join)
        } else {
          return { [FORM_ERROR]: 'Error occurred during form submit 😓' }
        }
      })

  const initialValues = pick(profile, [
    'id',
    'is_visible',
    'nickname',
    'nintendo_id',
    'language',
    'commentary',
  ])

  return (
    <Form
      onSubmit={onProfileSubmit}
      initialValues={initialValues}
      render={({ handleSubmit, submitError, submitting, submitSucceeded }) => (
        <form onSubmit={handleSubmit} className={classes.form}>
          <FormControlLabel
            control={
              <Field
                component={Switch}
                type='checkbox'
                name='is_visible'
                color='primary'
              />
            }
            label='Show my profile in players list on main page'
            className={classes.field}
          />
          <div className={classes.fieldsGroup}>
            <Field
              name='nickname'
              component={TextField}
              parse={identity}
              label='My nickname'
              className={classes.field}
              variant='outlined'
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Field
              name='nintendo_id'
              component={TextField}
              parse={identity}
              label='My Nintendo ID'
              className={classes.field}
              variant='outlined'
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Field
              name='language'
              component={TextField}
              parse={identity}
              label='Preferable language'
              className={classes.field}
              variant='outlined'
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Field
              name='commentary'
              component={TextField}
              parse={identity}
              label='Free text visible to other players'
              className={classes.field}
              InputLabelProps={{
                shrink: true,
              }}
              variant='outlined'
            />
          </div>
          <Button
            variant='contained'
            color='primary'
            type='submit'
            disabled={submitting}
          >
            {submitting ? (
              <CircularProgress size={24} color='secondary' />
            ) : (
              <span>Save</span>
            )}
          </Button>
          {submitSucceeded && (
            <PaddedAlert elevation={6} variant='filled' severity='success'>
              Profile updated
            </PaddedAlert>
          )}
          {submitError && (
            <PaddedAlert elevation={6} variant='filled' severity='error'>
              {submitError}
            </PaddedAlert>
          )}
        </form>
      )}
    />
  )
}
