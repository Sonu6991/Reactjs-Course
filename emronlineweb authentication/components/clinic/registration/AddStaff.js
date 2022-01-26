import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Grid,
} from "@mui/material";
import React from "react";
import { Controller, useFieldArray } from "react-hook-form";
import ButtonComp from "../../common/ButtonComp";
import TextFieldInput from "../../common/TextFieldInput";
import classes from "./AddStaff.module.scss";
import DropDown from "../../common/DropDown";
import TimingDetails from "./TimingDetails";
const roles = ["Doctor", "nurse"];

const AddStaff = ({ control, getValues, setValue }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "staffes",
  });

  return (
    <div className={classes.mainDiv}>
      {fields.map((item, index) => {
        return (
          <div key={item.id}>
            <div className={classes.branchHeader}>
              <div className={classes.stepBox}>
                <Box className={classes.box}>3</Box>
                <span>Add Staff</span>
              </div>
              {index === 0 ? (
                <ButtonComp
                  onClick={() => {
                    append({
                      headDoctore: false,
                      name: "",
                      email: "",
                      role: "",
                      contact: "",
                      timings: [
                        {
                          clinic: "",
                          weekDays: [],
                          fromTime: "",
                          toTime: "",
                        },
                      ],
                    });
                  }}
                >
                  Add More
                </ButtonComp>
              ) : (
                <ButtonComp
                  onClick={() => {
                    remove(index);
                  }}
                >
                  Remove
                </ButtonComp>
              )}
            </div>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  name={`staffes[${index}].headDoctore`}
                  control={control}
                  render={({ field: { ref, ...field } }) => (
                    <>
                      <FormControlLabel
                        {...field}
                        ref={ref}
                        control={
                          <Checkbox
                            classes={{
                              root: classes.checkboxRoot,
                            }}
                          />
                        }
                        label="Is the Head Doctor same as Admin ?"
                      />
                    </>
                  )}
                />
              </Grid>
              <Grid item container xs={12} spacing={2}>
                <Grid item xl={3} xs={12} md={6}>
                  <TextFieldInput
                    name={`staffes[${index}].name`}
                    control={control}
                    rules={{ required: "Name is required." }}
                    label="Name"
                  />
                </Grid>
                <Grid item xl={3} xs={12} md={6}>
                  <TextFieldInput
                    name={`staffes[${index}].email`}
                    control={control}
                    rules={{
                      required: "Email is required.",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address.",
                      },
                    }}
                    label="Email"
                  />
                </Grid>
                <Grid item xl={3} xs={12} md={6}>
                  <Controller
                    name={`staffes[${index}].role`}
                    control={control}
                    rules={{ required: "Role is required." }}
                    render={({
                      field: { ref, ...field },
                      fieldState: { invalid, error },
                    }) => (
                      <DropDown
                        label="Role"
                        {...field}
                        ref={ref}
                        invalid={invalid}
                        error={error}
                        items={roles}
                      />
                    )}
                  />
                </Grid>
                <Grid item xl={3} xs={12} md={6}>
                  <TextFieldInput
                    name={`staffes[${index}].contact`}
                    control={control}
                    rules={{
                      required: "Contact is required.",
                      pattern: {
                        value: /^(\+[\d]{1,5}|0)?[5-9]\d{9}$/,
                        message: "invalid Contact Detail",
                      },
                    }}
                    label="Contact"
                  />
                </Grid>
              </Grid>
              <Grid item className={classes.timingDetails} xs={12}>
                <div>Timing Details</div>
                <div className={classes.underline}></div>
              </Grid>
              <TimingDetails
                staffIndex={index}
                {...{ control, getValues, setValue }}
              />
            </Grid>
          </div>
        );
      })}
    </div>
  );
};

export default AddStaff;
