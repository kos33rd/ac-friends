import Autocomplete from '@material-ui/lab/Autocomplete'
import React, { useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import { find, map, isEmpty } from 'lodash'
import { useStore } from 'effector-react'

import { $fruits, $fruitsIsLoading, fetchFruits } from '~/data/stores/fruits'

export const FruitsSelect = ({ input: { name, value, onChange, ...restInput }, meta, ...rest }) => {
  const fruits = useStore($fruits)
  const fruitsIsLoading = useStore($fruitsIsLoading)
  useEffect(() => {
    if (!fruitsIsLoading && isEmpty(fruits)) {
      fetchFruits()
    }
  }, [])

  const selectedOptions = map(value, (id) => find(fruits, { id }))
  return (
    <Autocomplete
      multiple
      onChange={(e, val) => onChange(map(val, 'id'))}
      options={fruits}
      value={selectedOptions}
      getOptionLabel={(option) => option && `${option.icon} ${option.name}`}
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
