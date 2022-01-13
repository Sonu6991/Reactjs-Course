import { Button, IconButton, Input, MenuItem, Select, TextField, } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useForm, Controller, useFieldArray, useController } from 'react-hook-form'
import CardComp from '../Common/Card';
import classes from './BlockArray.module.scss';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import WardArray from './WardArray';
import TooltipComp from '../Common/Tooltip';

const BlockArray = ({ control, setValue, getValues, errors }) => {
      const { fields, append, remove } = useFieldArray({
            control,
            name: "block",
      })


      return (
            <div className={classes["main-div"]}>
                  <div className={classes["addBlock-div"]}>
                        <span className={classes.span}>Blocks Information</span>
                        <TooltipComp title="Add block" >
                              <IconButton className={classes["add-btn"]} component="span"
                                    onClick={() => {
                                          append({
                                                blockName: '',
                                                ward: [{
                                                      wardName: '',
                                                      NoOfBed: '',
                                                }]
                                          })
                                    }}>
                                    < AddIcon />
                              </IconButton>
                        </TooltipComp>
                  </div>

                  {fields.map((item, index) => {
                        return (
                              <CardComp key={item.id} className={classes["block-div"]}  >
                                    <div className={classes["block-info"]}>
                                          <div className={classes["block-header"]} >
                                                <Controller
                                                      name={`block[${index}].blockName`}
                                                      control={control}
                                                      rules={{ required: "this field is required" }}
                                                      render={({ field: { ref, ...field }, fieldState: { invalid, error } }) => {
                                                            return (<>
                                                                  <TextField error={invalid} inputRef={ref} className={classes.input} id={`block.${index}.blockName`} label="Block" variant="standard" {...field} helperText={error && error.type === 'required' && error.message} />
                                                            </>)
                                                      }}
                                                />

                                                <div className={classes["block-btn-container"]}>
                                                      <TooltipComp title="Add ward">
                                                            <IconButton className={classes["add-btn"]} component="span"
                                                                  onClick={() => {
                                                                        setValue(`block[${index}].ward`, [
                                                                              ...getValues().block[index].ward,
                                                                              { wardName: null, NoOfBed: null }
                                                                        ]);
                                                                  }}>
                                                                  < AddIcon />
                                                            </IconButton>
                                                      </TooltipComp>
                                                      <TooltipComp title="delete block" >
                                                            <IconButton className={classes["delete-btn"]} component="span" onClick={() => remove(index)}>
                                                                  < DeleteIcon />
                                                            </IconButton>
                                                      </TooltipComp>
                                                </div>
                                          </div>
                                          <div className={classes["ward-container"]}>
                                                <WardArray wardIndex={index}  {...{ control }} />
                                          </div>
                                    </div>
                              </CardComp>
                        )
                  })}
            </div >

      )
}

export default BlockArray
