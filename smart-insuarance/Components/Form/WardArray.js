import { IconButton, TextField } from '@mui/material';
import React, { Fragment } from 'react'
import { Controller, useFieldArray } from 'react-hook-form'
import classes from './WardArray.module.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import TooltipComp from '../Common/Tooltip';

const WardArray = ({ wardIndex, control }) => {
      const { fields, remove, } = useFieldArray({
            control,
            name: `block[${wardIndex}].ward`,
      })

      return (
            <>
                  {fields.map((items, index) => {
                        return (
                              <div key={items.id} className={classes["ward-div"]}>
                                    <Controller
                                          name={`block[${wardIndex}].ward[${index}].wardName`}
                                          control={control}
                                          render={({ field }) => <TextField className={classes.input} id={`block[${wardIndex}].blockName.ward[${index}].wardName`} label="Ward Name" variant="standard" {...field} />}
                                    />
                                    <Controller
                                          name={`block[${wardIndex}].ward[${index}].NoOfBed`}
                                          control={control}
                                          render={({ field }) => <TextField className={classes.input} id={`block[${index}].blockName.ward[${index}].NoOfBed`} label="No Of Bed" variant="standard" {...field} />}
                                    />
                                    <TooltipComp title="delete ward" >
                                          <IconButton className={classes["delete-btn"]} component="span" onClick={() => remove(index)}>
                                                < DeleteIcon />
                                          </IconButton>
                                    </TooltipComp>
                              </div>
                        )
                  })}

            </>
      )
}

export default WardArray
