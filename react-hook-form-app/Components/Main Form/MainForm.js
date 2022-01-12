import { ClassNames } from '@emotion/react'
import { Button, IconButton, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import CardComp from '../Common/Card';
import classes from './MainForm.module.scss';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import BlockArray from '../testing forms/BlockArray';
import SaveIcon from '@mui/icons-material/Save';
const defaultValues = {
      firstName: '',
      lastName: '',
      block: [{
            blockName: '',
            ward: [{
                  wardName: '',
                  NoOfBed: ''
            }]
      }]
}
const MainForm = () => {
      const [formData, setFormData] = useState(null)
      const {
            control,
            register,
            handleSubmit,
            getValues,
            errors,
            reset,
            setValue } = useForm(
                  <defaultValues></defaultValues>
            )
      const onSubmit = data => { setFormData(data) }

      return (
            <div className={classes["main-div"]}>
                  <div className={classes["info-div"]}>
                        <CardComp className={classes["hopital-info"]}>Hospital Information</CardComp>
                        <CardComp className={classes["contact-person"]}>Contact person</CardComp>
                  </div>

                  <div >
                        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>

                              <BlockArray {...{ control, defaultValues, getValues, setValue, errors }} />
                              {/* <Button type='submit' className={classes["submit-btn"]} variant="contained">Submit</Button> */}
                              <div className={classes["action-container"]}>
                                    <Button type='submit' variant="contained" className={` ${classes["add-btn"]}`} startIcon={<SaveIcon />}>
                                          Save
                                    </Button>
                              </div>
                        </form>
                        {
                              formData !== null && <div className={classes.div}>
                                    <h3>Output :</h3>
                                    <pre>
                                          {JSON.stringify(formData, null, 2)}
                                    </pre>
                              </div>
                        }
                  </div>
            </div>
      )
}

export default MainForm
