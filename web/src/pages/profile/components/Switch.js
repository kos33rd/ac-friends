import * as React from 'react'
import Switch from '@material-ui/core/Switch'


const SwitchWrapper = ({ input: { checked, name, onChange, ...restInput }, meta, ...rest }) => (
  <Switch
    {...rest}
    name={name}
    inputProps={restInput}
    onChange={onChange}
    checked={checked}
  />
)

export default SwitchWrapper
