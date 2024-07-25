import { Checkbox, FormControlLabel } from '@mui/material'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

function FCheckbox({ name, ...other }) {
  const { control } = useFormContext()

  return (
    <FormControlLabel
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => <Checkbox {...field} checked={field.value} />}
        />
      }
      {...other}
    />
  );
}

export default FCheckbox
