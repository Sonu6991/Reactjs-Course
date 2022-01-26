import {
  Box,
  Button,
  Grid,
  IconButton,
  InputLabel,
  TextField,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import { Controller } from "react-hook-form";
import TextFieldInput from "../../common/TextFieldInput";
import classes from "./Registration.module.scss";
import VerifiedIcon from "@mui/icons-material/Verified";
import ImageInput from "../../common/ImageInput";

const Registration = ({ control, verified, setVerified, getValues }) => {
  const [isDisabled, setIsDisabled] = useState(true);

  const verificationHandler = () => {
    if (+document.querySelector("#otp").value === 123456) {
      setVerified(true);
    } else {
      alert("Enter Valid OTP");
      document.querySelector("#otp").value = null;
    }
  };
  const otpHandler = (event) => {
    setIsDisabled(event.target.value.length === 6 ? false : true);
  };
  return (
    <div className={classes.main}>
      <div className={classes.titleContainer}>
        <Box className={classes.muiBox}>1</Box>
        <span className={classes.title}>Registration</span>
      </div>
      <Grid container rowSpacing={2} columnSpacing={3} className={classes.form}>
        <Grid container item xs={8} rowSpacing={2} columnSpacing={3}>
          <Grid item xs={6}>
            <TextFieldInput
              className={classes.TextField}
              name="registrationClinicName"
              control={control}
              rules={{
                required: "Clinic's Name is required.",
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Enter valid name.",
                },
              }}
              label="Clinic's Name"
            />
          </Grid>
          <Grid item xs={6}>
            <TextFieldInput
              className={classes.TextField}
              name="registrationAdmin"
              control={control}
              rules={{ required: "Admin is required." }}
              label="Admin"
            />
          </Grid>
          <Grid item xs={6}>
            <TextFieldInput
              className={classes.TextField}
              name="registrationClinicContactDetail"
              control={control}
              rules={{
                required: "Clinic's Contact Detail is required.",
                pattern: {
                  value: /^(\+[\d]{1,5}|0)?[5-9]\d{9}$/,
                  message: "invalid Clinic's Contact Detail",
                },
              }}
              label="Clinic's Contact Detail"
            />
          </Grid>
          <Grid item xs={6}>
            <TextFieldInput
              className={classes.TextField}
              name="registrationClinicEmail"
              control={control}
              rules={{
                required: "Clinic's Email is required.",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              }}
              label="Clinic's Email"
            />
          </Grid>
        </Grid>
        <Grid container item xs={4}>
          <Grid item xs={12}>
            <ImageInput
              name="registrationClinicLogo"
              control={control}
              label="Clinic's Logo"
              rules={{ require: true }}
            />
          </Grid>
        </Grid>
        <Grid container item xs={8} rowSpacing={2} columnSpacing={3}>
          <Grid item xs={6}>
            <InputLabel className={classes.inputLabel}>
              Verification Code (OTP)
            </InputLabel>
            <TextField
              className={classes.TextField}
              id="otp"
              disabled={verified}
              onChange={otpHandler}
              InputProps={{
                classes: {
                  root: classes.OutlinedInput,
                  focused: classes.OutlinedInput,
                  notchedOutline: classes.OutlinedInput,
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <div className={`${classes.TextField} ${classes.verification}`}>
              {!verified ? (
                <>
                  <Button variant="text" className={classes.otp}>
                    Sent OTP
                  </Button>
                  <Button
                    variant="contained"
                    disabled={isDisabled ? true : false}
                    onClick={verificationHandler}
                  >
                    Verify
                  </Button>
                </>
              ) : (
                <span className={classes.verified}>
                  <VerifiedIcon />
                  &nbsp; OTP Verified
                </span>
              )}
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Registration;
