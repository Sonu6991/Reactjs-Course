
import { Button, ButtonBase, Checkbox, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, } from '@mui/material'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import CardComp from '../Common/Card';
import classes from './MainForm.module.scss';
import MembersForm from './MembersForm';
import SaveIcon from '@mui/icons-material/Save';
import Image from 'next/image';
import img from '../../assets/profile.png'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const defaultValues = {
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      countryCode: '',
      moNo: '',
      gender: '',
      active: false,
      maritalStatus: '',
      emp_id: '',
      designation: '',
      address: '',
      city: '',
      state: '',
      country: '',
      members: [],
}

const MainForm = () => {
      const [formData, setFormData] = useState(null)
      const {
            control,
            register,
            handleSubmit,
            getValues,
            formState: { errors },
            reset,
            setValue } = useForm({ defaultValues, mode: 'onTouched', }

            )
      const onSubmit = data => { setFormData(data) }

      return (
            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                  {/* <div className={classes["main-div"]}> */}
                  <div className={classes["info-div"]}>
                        <CardComp className={classes["hopital-info"]}>
                              {/* <div className={classes["hopitalInfo-container"]}> */}
                              <Controller
                                    name="firstName"
                                    control={control}
                                    rules={{ required: "this field is required" }}
                                    render={({
                                          field: { ref, ...field },
                                          fieldState: { invalid, error },
                                    }) => {
                                          console.log("invalid", invalid);
                                          return (
                                                <>
                                                      <TextField
                                                            error={invalid}
                                                            inputRef={ref}
                                                            className={classes.input}
                                                            label="First Name*"
                                                            variant="standard"
                                                            {...field}
                                                            helperText={
                                                                  error && error.type === "required" && error.message
                                                            }
                                                      />
                                                </>
                                          );
                                    }}
                              />
                              <Controller
                                    name="middleName"
                                    control={control}
                                    rules={{ required: "this field is required" }}
                                    render={({
                                          field: { ref, ...field },
                                          fieldState: { invalid, error },
                                    }) => {
                                          console.log("invalid", invalid);
                                          return (
                                                <>
                                                      <TextField
                                                            error={invalid}
                                                            inputRef={ref}
                                                            className={classes.input}
                                                            label="Middle Name*"
                                                            variant="standard"
                                                            {...field}
                                                            helperText={
                                                                  error && error.type === "required" && error.message
                                                            }
                                                      />
                                                </>
                                          );
                                    }}
                              />
                              <Controller
                                    name="lastName"
                                    control={control}
                                    rules={{ required: "this field is required" }}
                                    render={({
                                          field: { ref, ...field },
                                          fieldState: { invalid, error },
                                    }) => {
                                          console.log("invalid", invalid);
                                          return (
                                                <>
                                                      <TextField
                                                            error={invalid}
                                                            inputRef={ref}
                                                            className={classes.input}
                                                            label="Last Name*"
                                                            variant="standard"
                                                            {...field}
                                                            helperText={
                                                                  error && error.type === "required" && error.message
                                                            }
                                                      />
                                                </>
                                          );
                                    }}
                              />
                              <Controller
                                    name="email"
                                    control={control}
                                    rules={{
                                          pattern:
                                                /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
                                    }}
                                    render={({
                                          field: { ref, ...field },
                                          fieldState: { invalid, error },
                                    }) => {
                                          return (
                                                <>
                                                      <TextField
                                                            error={invalid}
                                                            inputRef={ref}
                                                            className={classes.input}
                                                            label="Email"
                                                            variant="standard"
                                                            {...field}
                                                            helperText={
                                                                  error &&
                                                                  error.type === "pattern" &&
                                                                  "Enter Valid email"
                                                            }
                                                      />
                                                </>
                                          );
                                    }}
                              />

                              <Controller
                                    name="countryCode"
                                    control={control}
                                    rules={{ required: "this field is required" }}
                                    render={({
                                          field: { ref, ...field },
                                          fieldState: { invalid, error },
                                    }) => {
                                          return (
                                                <>
                                                      <TextField
                                                            error={invalid}
                                                            inputRef={ref}
                                                            className={classes.input}
                                                            label="Country Code*"
                                                            variant="standard"
                                                            {...field}
                                                            helperText={
                                                                  error && error.type === "required" && error.message
                                                            }
                                                      />
                                                </>
                                          );
                                    }}
                              />
                              <Controller
                                    name="moNo"
                                    control={control}
                                    rules={{ pattern: /^(\+\d{1, 3}[- ]?)?\d{10}$/ }}
                                    render={({
                                          field: { ref, ...field },
                                          fieldState: { invalid, error },
                                    }) => {
                                          return (
                                                <>
                                                      <TextField
                                                            error={invalid}
                                                            inputRef={ref}
                                                            className={classes.input}
                                                            label="Moble"
                                                            variant="standard"
                                                            {...field}
                                                            helperText={
                                                                  error && "Please enter a valid 10 digit Mobile no."
                                                            }
                                                      />
                                                </>
                                          );
                                    }}
                              />
                              <Controller
                                    name="gender"
                                    control={control}
                                    rules={{ required: "this field is required" }}
                                    render={({
                                          field: { ref, ...field },
                                          fieldState: { invalid, error },
                                    }) => {
                                          return (
                                                <>
                                                      <FormLabel
                                                            className={classes["gender-lable"]}
                                                            component="legend"
                                                      >
                                                            Gender*
                                                      </FormLabel>
                                                      <RadioGroup
                                                            inputRef={ref}
                                                            {...field}
                                                            row
                                                            aria-label="gender"
                                                            name="row-radio-buttons-group"
                                                      >
                                                            <FormControlLabel
                                                                  value="female"
                                                                  color="warning"
                                                                  control={<Radio />}
                                                                  label="Female"
                                                            />
                                                            <FormControlLabel
                                                                  value="male"
                                                                  control={<Radio />}
                                                                  label="Male"
                                                            />
                                                      </RadioGroup>
                                                </>
                                          );
                                    }}
                              />
                              <Controller
                                    name="active"
                                    control={control}
                                    render={({ field: { ref, ...field } }) => {
                                          return (
                                                <FormControlLabel
                                                      className={classes.input}
                                                      control={
                                                            <Checkbox inputRef={ref} size="small" {...field} />
                                                      }
                                                      label="Active"
                                                />
                                          );
                                    }}
                              />
                              <Controller
                                    name="maritalStatus"
                                    control={control}
                                    rules={{ required: "this field is required" }}
                                    render={({
                                          field: { ref, ...field },
                                          fieldState: { invalid, error },
                                    }) => {
                                          return (
                                                <>
                                                      <FormLabel
                                                            className={classes["gender-lable"]}
                                                            component="legend"
                                                      >
                                                            Marital Status*
                                                      </FormLabel>
                                                      <RadioGroup
                                                            inputRef={ref}
                                                            {...field}
                                                            row
                                                            aria-label="gender"
                                                            name="row-radio-buttons-group"
                                                      >
                                                            <FormControlLabel
                                                                  value="single"
                                                                  color="warning"
                                                                  control={<Radio />}
                                                                  label="Single"
                                                            />
                                                            <FormControlLabel
                                                                  value="married"
                                                                  control={<Radio />}
                                                                  label="Married"
                                                            /><FormControlLabel
                                                                  value="divorced"
                                                                  control={<Radio />}
                                                                  label="Divorced"
                                                            /><FormControlLabel
                                                                  value="widowed"
                                                                  control={<Radio />}
                                                                  label="Widowed"
                                                            />
                                                      </RadioGroup>
                                                </>
                                          );
                                    }}
                              />
                              <Controller
                                    name="emp_id"
                                    control={control}
                                    render={({
                                          field: { ref, ...field },
                                          fieldState: { invalid, error },
                                    }) => {
                                          return (
                                                <>
                                                      <TextField
                                                            error={invalid}
                                                            inputRef={ref}
                                                            className={classes.input}
                                                            label="Employee ID"
                                                            variant="standard"
                                                            {...field}
                                                            helperText={
                                                                  error && error.type === "required" && error.message
                                                            }
                                                      />
                                                </>
                                          );
                                    }}
                              />
                              <Controller
                                    name="designation"
                                    control={control}
                                    render={({
                                          field: { ref, ...field },
                                          fieldState: { invalid, error },
                                    }) => {
                                          return (
                                                <>
                                                      <TextField
                                                            error={invalid}
                                                            inputRef={ref}
                                                            className={classes.input}
                                                            label="Designation"
                                                            variant="standard"
                                                            {...field}
                                                            helperText={
                                                                  error && error.type === "required" && error.message
                                                            }
                                                      />
                                                </>
                                          );
                                    }}
                              />
                              <Controller
                                    name="address"
                                    control={control}
                                    render={({
                                          field: { ref, ...field },
                                          fieldState: { invalid, error },
                                    }) => {
                                          return (
                                                <>
                                                      <TextField
                                                            error={invalid}
                                                            inputRef={ref}
                                                            className={classes.input}
                                                            label="Address"
                                                            variant="standard"
                                                            {...field}
                                                            helperText={
                                                                  error && error.type === "required" && error.message
                                                            }
                                                      />
                                                </>
                                          );
                                    }}
                              />
                              <Controller
                                    name="city"
                                    control={control}
                                    render={({
                                          field: { ref, ...field },
                                          fieldState: { invalid, error },
                                    }) => {
                                          return (
                                                <>
                                                      <TextField
                                                            error={invalid}
                                                            inputRef={ref}
                                                            className={classes.input}
                                                            label="City"
                                                            variant="standard"
                                                            {...field}
                                                            helperText={
                                                                  error && error.type === "required" && error.message
                                                            }
                                                      />
                                                </>
                                          );
                                    }}
                              />
                              <Controller
                                    name="state"
                                    control={control}
                                    render={({
                                          field: { ref, ...field },
                                          fieldState: { invalid, error },
                                    }) => {
                                          return (
                                                <>
                                                      <TextField
                                                            error={invalid}
                                                            inputRef={ref}
                                                            className={classes.input}
                                                            label="State"
                                                            variant="standard"
                                                            {...field}
                                                            helperText={
                                                                  error && error.type === "required" && error.message
                                                            }
                                                      />
                                                </>
                                          );
                                    }}
                              />
                              <Controller
                                    name="country"
                                    control={control}
                                    render={({
                                          field: { ref, ...field },
                                          fieldState: { invalid, error },
                                    }) => {
                                          return (
                                                <>
                                                      <TextField
                                                            error={invalid}
                                                            inputRef={ref}
                                                            className={classes.input}
                                                            label="Country"
                                                            variant="standard"
                                                            {...field}
                                                            helperText={
                                                                  error && error.type === "required" && error.message
                                                            }
                                                      />
                                                </>
                                          );
                                    }}
                              />
                              {/* </div> */}

                        </CardComp>
                        <CardComp className={classes["contact-person"]}>
                              {/* <div className={classes["photo-container"]}> */}
                              <Image className={classes.profile} src={img} />
                              <div className={classes["photo-actions"]}>
                                    <Button className={classes["camera-button"]} startIcon={<CameraAltIcon />}>Access Camera</Button>
                                    <Button color='inherit' className={classes["select-button"]} startIcon={<AddPhotoAlternateIcon />}>Select Photo</Button>
                              </div>
                              {/* </div> */}
                        </CardComp>
                  </div>

                  <div >


                        <MembersForm {...{ control, defaultValues, getValues, setValue, errors }} />

                        <div className={classes["action-container"]}>
                              <Button type='submit' variant="contained" className={` ${classes["add-btn"]}`} startIcon={<SaveIcon />}>
                                    Save
                              </Button>
                        </div>

                        {
                              formData !== null && <div className={classes.div}>
                                    <h3>Output :</h3>
                                    <pre>
                                          {JSON.stringify(formData, null, 2)}
                                    </pre>
                              </div>
                        }
                  </div>
                  {/* </div> */}
            </form>
      )
}

export default MainForm
