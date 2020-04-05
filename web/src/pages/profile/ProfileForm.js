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
import { CountrySelect } from '~/pages/profile/components/CountrySelect'
import { FruitsSelect } from '~/pages/profile/components/FruitsSelect'
import { Select } from '~/pages/profile/components/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'

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
  flexField: {
    flex: '1 0 auto',
  },
  fieldsGroup: {
    marginBottom: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  sideLabel: {
    marginTop: 16,
    marginRight: 8,
  },
  fieldsRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
  }
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
    'friend_code',
    'language',
    'commentary',
    'fruits',
    'playtime',
    'playdays',
  ])

  return (
    <Form
      onSubmit={onProfileSubmit}
      initialValues={initialValues}
      render={({ handleSubmit, submitError, submitting, submitSucceeded, values }) => (
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
            label='Show my profile in public players list on main page'
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
              name='friend_code'
              component={TextField}
              parse={identity}
              label='My Friend Code'
              placeholder='SW-####-####-####'
              className={classes.field}
              variant='outlined'
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Field
              name='language'
              component={CountrySelect}
              label='Preferable language'
              className={classes.field}
              variant='outlined'
              InputLabelProps={{
                shrink: true,
              }}
            />

            <div className={classes.fieldsRow}>
              <Typography variant='body1' className={classes.sideLabel}>
                I usually play
              </Typography>
              <Field
                name='playtime'
                component={Select}
                displayEmpty
                parse={identity}
                className={classes.field}
                InputLabelProps={{
                  shrink: true,
                }}
                formControlProps={{
                  variant: 'outlined',
                  className: classes.flexField,
                }}
              >
                <MenuItem value={1}>During the day</MenuItem>
                <MenuItem value={2}>In the morning</MenuItem>
                <MenuItem value={3}>In the evening</MenuItem>
                <MenuItem value={4}>At night</MenuItem>
                <MenuItem value={5}>All day long 😵</MenuItem>
              </Field>
              <Typography variant='body1' className={classes.sideLabel}/>
              <Field
                name='playdays'
                component={Select}
                displayEmpty
                parse={identity}
                className={classes.field}
                InputLabelProps={{
                  shrink: true,
                }}
                formControlProps={{
                  variant: 'outlined',
                  className: classes.flexField,
                }}
              >
                <MenuItem value={1}>Every day</MenuItem>
                <MenuItem value={2}>On weekends</MenuItem>
                <MenuItem value={3}>On weekdays</MenuItem>
              </Field>
            </div>

            <Field
              name='fruits'
              component={FruitsSelect}
              label='I have this fruits on my island'
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
              label='A short message for other players'
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
