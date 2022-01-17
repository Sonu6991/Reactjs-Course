import {
      Checkbox,
      FormControlLabel,
      FormLabel,
      IconButton,
      Radio,
      RadioGroup,
      TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Controller, useFieldArray } from "react-hook-form";
import CardComp from "../Common/Card";
import classes from "./MembersForm.module.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import TooltipComp from "../Common/Tooltip";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import DateAdapter from "@mui/lab/AdapterMoment";
import moment from "moment";
import { DatePicker } from "@mui/lab";

const MembersForm = ({ control }) => {
      const [dob, setDob] = React.useState(new Date(''));
      const [open, setOpen] = React.useState(false);

      const { fields, append, remove } = useFieldArray({
            control,
            name: "members",
      });

      return (
            <CardComp className={classes["main-div"]}>
                  <div className={classes["addBlock-div"]}>
                        <span className={classes.span}>Family Members</span>
                        <TooltipComp title="add member">
                              <IconButton
                                    className={classes["add-btn"]}
                                    component="span"
                                    onClick={() => {
                                          append({
                                                firstName: "",
                                                midName: "",
                                                lastName: "",
                                                gender: "",
                                                dob: "",
                                                email: "",
                                                countryCode: "",
                                                moNo: "",
                                                relation: "",
                                                active: false,
                                          });
                                    }}
                              >
                                    <PersonAddIcon />
                              </IconButton>
                        </TooltipComp>
                  </div>

                  {fields.map((item, index) => {
                        return (
                              <div key={item.id} className={classes["block-div"]}>
                                    <div className={classes["block-header"]}>
                                          <Controller
                                                name={`members[${index}].firstName`}
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
                                                name={`members[${index}].midName`}
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
                                                name={`members[${index}].lastName*`}
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
                                                name={`members[${index}].gender`}
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
                                          {/* <Controller
                                                name={`members[${index}].dob`}
                                                control={control}
                                                rules={{ required: "this field is required" }}
                                                render={({ field: { ref, ...field }, fieldState: { invalid, error } }) => {
                                                      return (<>
                                                            <TextField error={invalid} inputRef={ref} className={classes.input} label="Date Of Birth *" variant="standard" {...field} helperText={error && error.type === 'required' && error.message} />
                                                      </>)
                                                }}
                                          /> */}
                                          
                                          {/* <LocalizationProvider dateAdapter={DateAdapter}>
                                                <DesktopDatePicker
                                                      label="Date desktop"
                                                      inputFormat='DD/MM/yyyy'
                                                      value={value}
                                                      onChange={(value) => { setValue(value) }}
                                                      renderInput={(params) => <TextField {...params} />}
                                                />
                                          </LocalizationProvider> */}
                                          <Controller
                                                name={`members[${index}].email`}
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
                                                name={`members[${index}].countryCode`}
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
                                                                        label="Country Code"
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
                                                name={`members[${index}].moNo`}
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
                                                                        label="Moble"
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
                                                name={`members[${index}].relation`}
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
                                                                        label="Relation*"
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
                                                name={`members[${index}].active`}
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
                                    </div>
                                    <div className={classes["block-btn-container"]}>
                                          <TooltipComp title="delete member">
                                                <IconButton
                                                      className={classes["delete-btn"]}
                                                      component="span"
                                                      onClick={() => remove(index)}
                                                >
                                                      <DeleteIcon />
                                                </IconButton>
                                          </TooltipComp>
                                    </div>
                              </div>
                        );
                  })}
            </CardComp>
      );
};

export default MembersForm;
