import * as React from 'react'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MuiSelect from '@material-ui/core/Select'
import FormHelperText from '@material-ui/core/FormHelperText'

export const Select = ({
  input: { name, value, onChange, ...restInput },
  meta,
  label,
  formControlProps,
  InputLabelProps,
  ...rest
}) => {
  const showError =
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
    meta.touched

  return (
    <FormControl {...formControlProps} error={showError}>
      <InputLabel htmlFor={name} {...InputLabelProps}>
        {label}
      </InputLabel>

      <MuiSelect
        {...rest}
        name={name}
        onChange={onChange}
        inputProps={restInput}
        value={value}
        label={label}
      />

      {showError && (
        <FormHelperText>{meta.error || meta.submitError}</FormHelperText>
      )}
    </FormControl>
  )
}
