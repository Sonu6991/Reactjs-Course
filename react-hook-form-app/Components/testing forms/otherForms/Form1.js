import { Input, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import classes from './Form.module.scss';

const Form1 = () => {
      const [formData, setFormData] = useState(null)
      const { control, handleSubmit } = useForm({
            values: {
                  firstName: '',
                  city: ''
            }
      })
      const onSubmit = data => { setFormData(data) }
      return (
            <>
                  <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                        <Controller
                              name='firstName'
                              control={control}
                              render={({ field }) => <Input {...field} />}
                        />
                        <Controller
                              name='city'
                              control={control}
                              render={({ field }) =>
                                    <Select {...field}
                                    >
                                          <MenuItem value='ahmedabad'>Ahmedabad</MenuItem>
                                          <MenuItem value='surat'>Surat</MenuItem>
                                          <MenuItem value='rajkot'>Rajkot</MenuItem>
                                    </Select>
                              }
                        />
                        <input type="submit" />
                  </form>


                  {formData !== null && <div className={classes.div}>
                        <h3>Output :</h3>
                        <pre>
                              {JSON.stringify(formData, null, 2)}
                        </pre>
                  </div>
                  }
            </>
      )
}

export default Form1
