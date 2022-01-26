import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Controller, useFieldArray } from "react-hook-form";
import ButtonComp from "../../common/ButtonComp";
import classes from "./Branches.module.scss";
import TextFieldInput from "../../common/TextFieldInput";

const Branches = ({ control }) => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const { fields, append, remove } = useFieldArray({
    control,
    name: "branches",
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);
  return (
    <div className={classes.mainDiv}>
      {fields.map((item, index) => {
        return (
          <div key={item.id}>
            <div className={classes.branchHeader}>
              <div className={classes.stepBox}>
                <Box className={classes.box}>2</Box>
                <Typography ml={2} variant="h6" component="h6">
                  Branch/Location
                </Typography>
              </div>
              {index === 0 ? (
                <ButtonComp
                  onClick={() => {
                    append({
                      branchName: "",
                      clinicAddress: "",
                      city: "",
                      state: "",
                      zipcode: "",
                      latitude: latitude,
                      longitude: longitude,
                    });
                  }}
                >
                  Add Branch
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
            <Grid container rowSpacing={2} columnSpacing={3}>
              <Grid container item xs={12} rowSpacing={2} columnSpacing={3}>
                <Grid item xs={12} sm={12} lg={5} xl={4} md={12}>
                  <TextFieldInput
                    className={classes.midRightMargin}
                    name={`branches[${index}].branchName`}
                    control={control}
                    rules={{ required: "Branch Name is required." }}
                    label="Branch Name"
                  />
                </Grid>
                <Grid item xs={12} sm={12} xl={8} lg={7} md={12}>
                  <TextFieldInput
                    name={`branches[${index}].clinicAddress`}
                    control={control}
                    rules={{ required: "Clinic's Address is required." }}
                    className={classes.address}
                    label="Clinic's Address"
                  />
                </Grid>
              </Grid>
              <Grid container item xs={12} rowSpacing={2} columnSpacing={3}>
                <Grid item xl={2} lg={2.5} xs={12} md={4} sm={6}>
                  <TextFieldInput
                    name={`branches[${index}].city`}
                    control={control}
                    rules={{ required: "City is required." }}
                    label="City"
                  />
                </Grid>
                <Grid item xl={2} lg={2.5} xs={12} md={4} sm={6}>
                  <TextFieldInput
                    name={`branches[${index}].state`}
                    control={control}
                    rules={{ required: "State is required." }}
                    label="State"
                  />
                </Grid>
                <Grid item xl={4} lg={2.5} xs={12} md={4} sm={6}>
                  <TextFieldInput
                    name={`branches[${index}].zipcode`}
                    control={control}
                    rules={{ required: "Zip Code is required." }}
                    type="number"
                    label="Zip Code"
                  />
                </Grid>
                <Grid
                  container
                  item
                  lg={4}
                  xs={12}
                  sm={6}
                  rowSpacing={2}
                  columnSpacing={3}
                >
                  <Grid item xs={6}>
                    <TextFieldInput
                      name={`branches[${index}].latitude`}
                      control={control}
                      readOnly
                      inputValue={latitude}
                      label="Latitude"
                      plane
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextFieldInput
                      name={`branches[${index}].longitude`}
                      control={control}
                      readOnly
                      inputValue={longitude}
                      label="Longitude"
                      plane
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        );
      })}
    </div>
  );
};

export default Branches;
