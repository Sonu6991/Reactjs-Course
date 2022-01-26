import { Box, Grid, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import StepBox from "../../common/StepBox";
import classes from "./PatientReg.module.scss";
const defaultValues = {};
const PatientReg = () => {
  const [showFamilyInfo, setShowFamilyInfo] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "all",
    defaultValues,
  });
  const handler = () => {
    console.log("called");
  };
  return (
    <Grid container className={classes.mainDiv}>
      <Grid item md={4} sm={12}>
        <Box className={classes.MainImgContainer}></Box>
      </Grid>
      <Grid item md={8} sm={12} className={classes.infoDiv}>
        <Grid item container alignItems="center" spacing={2}>
          <Grid item md={8.5} sm={6}>
            <Grid className={classes.title}>
              <Typography
                component="p"
                variant="h5"
                className={classes.font700}
              >
                Registration
              </Typography>
            </Grid>
            <Grid>
              <Typography component="p" variant="subtitle2">
                Kindly follow the registration process to get Started.
              </Typography>
            </Grid>
          </Grid>
          <Grid item container md={3.5} sm={6} alignItems="center">
            <Grid
              item
              container
              alignItems="center"
              justifyContent="space-evenly"
            >
              <span className={classes.loginLink}>
                <span>Already register?</span>
                <Link href="/login">Login now</Link>
              </span>
              <StepBox outlined={showFamilyInfo}>1</StepBox>
              <StepBox outlined={!showFamilyInfo}>2</StepBox>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.subHeading}>
          <Typography component="p" variant="h6" className={classes.font500}>
            Add Personal Details
          </Typography>
        </Grid>
        <Grid item container>
          <Grid item md={7}>
            <Grid item container>
              <Grid md={6} className={classes.boder}>
                1
              </Grid>
              <Grid md={6} className={classes.boder}>
                2
              </Grid>
            </Grid>

            <Grid md={12} className={classes.boder}>
              1
            </Grid>
            <Grid item container>
              <Grid md={6} className={classes.boder}>
                1
              </Grid>
              <Grid md={6} className={classes.boder}>
                2
              </Grid>
            </Grid>
          </Grid>
          <Grid md={5} className={classes.boder}>
            2
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PatientReg;
