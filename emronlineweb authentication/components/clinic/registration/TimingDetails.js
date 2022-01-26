import { Checkbox, Grid, InputLabel, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Controller, useFieldArray } from "react-hook-form";
import DropDown from "../../common/DropDown";
import classes from "./TimingDetails.module.scss";
import TextFieldInput from "../../common/TextFieldInput";
import ButtonComp from "../../common/ButtonComp";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
const Clinics = [
  {
    id: 1,
    name: "Medical Clinic 1",
  },
  {
    id: 2,
    name: "Medical Clinic 2",
  },
  {
    id: 3,
    name: "Medical Clinic 3",
  },
];

const TimingDetails = ({ control, staffIndex, getValues, setValue }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `staffes[${staffIndex}].timings`,
  });
  const [weekDays, setWeekDays] = useState([]);
  return (
    <>
      {fields.map((items, index) => {
        let data = getValues(
          `staffes[${staffIndex}].timings[${index}].weekDays`
        );

        return (
          <Grid
            key={items.id}
            sx={12}
            item
            container
            spacing={2}
          >
            <Grid item xl={3} lg={5} xs={12}>
              <Controller
                name={`staffes[${staffIndex}].timings[${index}].clinic`}
                control={control}
                rules={{ required: true }}
                render={({
                  field: { ref, ...field },
                  fieldState: { invalid, error },
                }) => (
                  <DropDown
                    label="Clinic"
                    {...field}
                    ref={ref}
                    invalid={invalid}
                    error={error}
                    items={Clinics}
                    displayItem="name"
                  />
                )}
              />
            </Grid>
            <Grid
              item
              container
              lg={7}
              xl={4.4}
              md={12}
              sm={12}
              xs={12}
              justifyContent="space-between"
              className={classes.weekDays}
            >
              <Grid item xs={12}>
                <InputLabel className={classes.label}>Week days</InputLabel>
              </Grid>
              {Days.map((day, i) => (
                <Grid
                  key={i}
                  item
                  sm={1.2}
                  lg={1}
                  xl={1}
                  md={1.2}
                  xs={2}
                >
                  <Box
                    className={`${classes.box} ${
                      data.includes(day) && classes.checkedBoxBg
                    }`}
                  >
                    <Typography>{day.charAt(0).toUpperCase()}</Typography>
                    <Checkbox
                      value={day}
                      onChange={(e) => {
                        setWeekDays(
                          data.includes(day)
                            ? data.splice(data.indexOf(day), 1)
                            : data.push(e.target.value)
                        );
                        setValue(
                          `staffes[${staffIndex}].timings[${index}].weekDays`,
                          data
                        );
                      }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Grid item xl={2} lg={4} md={5} xs={12}>
              <TextFieldInput
                name={`staffes[${staffIndex}].timings[${index}].fromTime`}
                control={control}
                label="From"
                type="time"
              />
            </Grid>
            <Grid item xl={2} lg={4} md={5} xs={12}>
              <TextFieldInput
                name={`staffes[${staffIndex}].timings[${index}].toTime`}
                control={control}
                label="To"
                type="time"
              />
            </Grid>
            <Grid
              item
              xl={0.5}
              lg={1}
              md={1}
              xs={12}
              container
              justifyContent="center"
              alignItems="center"
            >
              {index === 0 ? (
                <ButtonComp
                  onClick={() => {
                    append({
                      clinic: "",
                      weekDays: [],
                      fromTime: `${new Date().getHours()}:${new Date().getMinutes()}`,
                      toTime: `${new Date().getHours()}:${new Date().getMinutes()}`,
                    });
                  }}
                  className={classes.addBtn}
                >
                  <AddIcon />
                </ButtonComp>
              ) : (
                <ButtonComp
                  onClick={() => {
                    remove(index);
                  }}
                  className={classes.addBtn}
                >
                  <RemoveIcon />
                </ButtonComp>
              )}
            </Grid>
          </Grid>
        );
      })}
    </>
  );
};

export default TimingDetails;
