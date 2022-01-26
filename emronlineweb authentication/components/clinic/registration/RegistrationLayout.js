import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import classes from "./RegistrationLayout.module.scss";
import Registration from "./Registration";
import Branches from "./Branches";
import ButtonComp from "../../common/ButtonComp";
import AddStaff from "./AddStaff";
import Router from "next/router";
import Link from "next/link";
import { Grid } from "@mui/material";

const defaultValues = {
  registrationClinicName: "",
  registrationAdmin: "",
  registrationClinicContactDetail: "",
  registrationClinicEmail: "",
  registrationClinicLogo: "",
  verificationCode: "",
  branches: [
    {
      branchName: "",
      clinicAddress: "",
      city: "",
      state: "",
      zipcode: "",
      latitude: "12.3435645",
      longitude: "54.454647",
    },
  ],
  staffes: [
    {
      headDoctore: false,
      name: "",
      email: "",
      role: "",
      contact: "",
      timings: [
        {
          clinic: "",
          weekDays: [],
          fromTime: `${new Date().getHours()}:${new Date().getMinutes()}`,
          toTime: `${new Date().getHours()}:${new Date().getMinutes()}`,
        },
      ],
    },
  ],
};
const ClinicRegistration = () => {
  const [showStaff, setShowStaff] = useState(false);
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
  const onSubmit = (data) => console.log(data);
  const [verified, setVerified] = useState(false);

  const haldleSteps = () => {
    // getValues("staffes") ? setShowStaff(true) : setStep(1);
    setShowStaff(true);
  };
  return (
    <Grid container className={classes.mainDiv}>
      <Grid item md={3.6}>
        <img src="/assets/image.png" alt="" className={classes.mainImg} />
      </Grid>
      <Grid className={classes.mainContent} item md={8.4}>
        <div className={classes.header}>
          <span>
            <div className={classes.title}>Register your clinic!</div>
            <div>Kindly follow three step regisration to get started</div>
          </span>
          <span>
            <span className={classes.lessOpacityText}>Already register?</span>
            <Link href="/login">
              <a className={classes.loginNow}>Login now</a>
            </Link>
          </span>
        </div>
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <Registration
            {...{
              control,
              register,
              getValues,
              setValue,
              errors,
              verified,
              setVerified,
            }}
          />
          {verified && (
            <>
              <Branches
                {...{ control, defaultValues, getValues, setValue, errors }}
              />

              {showStaff ? (
                <>
                  <AddStaff
                    {...{
                      control,
                      defaultValues,
                      getValues,
                      setValue,
                      errors,
                    }}
                  ></AddStaff>
                  <div className={classes.submitBtnDiv}>
                    <ButtonComp type="submit" color="blue">
                      Get Started
                    </ButtonComp>
                  </div>
                </>
              ) : (
                <div className={classes.submitBtnDiv}>
                  <ButtonComp onClick={haldleSteps} color="blue">
                    Next
                  </ButtonComp>
                </div>
              )}
            </>
          )}
        </form>
      </Grid>
    </Grid>
  );
};

export default ClinicRegistration;
