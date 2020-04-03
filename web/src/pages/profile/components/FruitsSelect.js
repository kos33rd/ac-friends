import Autocomplete from '@material-ui/lab/Autocomplete'
import React from 'react'
import TextField from '@material-ui/core/TextField'
import { find, map } from 'lodash'

import { FRUITS } from '~/data/constants'

export const FruitsSelect = ({ input: { name, value, onChange, ...restInput }, meta, ...rest }) => {
  const selectedOptions = map(value, (id) => find(FRUITS, { id }))
  return (
    <Autocomplete
      multiple
      onChange={(e, val) => onChange(map(val, 'id'))}
      options={FRUITS}
      value={selectedOptions}
      getOptionLabel={(option) => option.name}
      renderOption={(option) => (
        <React.Fragment>
          {option.icon} {option.name}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField name={name} inputProps={restInput} {...params} {...rest} />
      )}
    />
  )
}
