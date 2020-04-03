import { Field, Form } from 'react-final-form'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '~/pages/profile/components/Switch'
import { TextField } from 'final-form-material-ui'
import Button from '@material-ui/core/Button'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useStore } from 'effector-react'
import profileStore from '~/data/stores/profile'


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
}))

export const ProfileForm = () => {
  const classes = useStyles()
  const profile = useStore(profileStore)

  const onProfileSubmit = (profileData) => console.log('Profile submitted', profileData)
  return (
    <Form
      onSubmit={onProfileSubmit}
      initialValues={profile}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={classes.form}>
          <FormControlLabel
            control={<Field component={Switch} type='checkbox' name="is_visible" color="primary" />}
            label="Show my profile in players list on main page"
            className={classes.field}
          />
          <div className={classes.fieldsGroup}>
            <Field
              name="nickname"
              component={TextField}
              label="My nickname"
              className={classes.field}
              variant="outlined"
            />
            <Field
              name="nintendo_id"
              component={TextField}
              label="My Nintendo ID"
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
              InputLabelProps={{
                shrink: true,
              }}
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
  )
}
