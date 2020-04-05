import Autocomplete from '@material-ui/lab/Autocomplete'
import React from 'react'
import TextField from '@material-ui/core/TextField'
import { getEmojiFlag, languages } from 'countries-list'
import { find, reduce, toUpper } from 'lodash'

const options = reduce(
  languages,
  (acc, lang, code) => [...acc, { code, ...lang }],
  []
)

export const CountrySelect = ({
  input: { name, value, onChange, ...restInput },
  meta,
  ...rest
}) => {
  const selectedOption = find(options, { code: value })
  return (
    <Autocomplete
      onChange={(e, val) => onChange(val && val.code)}
      options={options}
      value={selectedOption}
      getOptionLabel={(option) => option.native}
      getOptionSelected={(option) => option && option.code}
      renderOption={(option) => (
        <React.Fragment>
          <span>{getEmojiFlag(toUpper(option.code))}</span>
          {option.native}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField name={name} inputProps={restInput} {...params} {...rest} />
      )}
    />
  )
}
