import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Image from "next/image";
import loginImage from "../../../public/assets/loginImage.png";
import classes from "./LoginPage.module.scss";
import login_hops_logo from "../../../public/assets/svg/login_hops_logo.png";
import login_earth from "../../../public/assets/svg/login_earth.png";
import { Typography } from "@mui/material";
import { style } from "@mui/system";


export const LoginPage = (props) => {
  // if (process.window) {
  //   componentDidUpdate = () => {
  //     if (shouldBlockNavigation) {
  //       window.onbeforeunload = () => true;
  //     } else {
  //       window.onbeforeunload = () => true;
  //     }
  //   };
  // }

  return (
    <>
      <Image src={loginImage} layout="fill"  />
      <Grid container className={classes.login_grid_container}>
        <Grid
          className={classes.login_grid_logo}
          item
          xs={12}
          sm={7}
          md={7}
          lg={8}
        
          
        >
       <Box className={classes.login_grid_clientLogo}>
         <Box> <Image alt="HOPS" src={login_hops_logo}   height={75} width={200} /></Box>
          <Typography
        variant="h4"
          className={classes.login_grid_clientLogo_typo}
            >
         <strong> Lets get started.</strong>
        </Typography>
          </Box>
         
        </Grid>

        <Grid
          className={classes.login_grid_form}
          item
          xs={12}
          sm={5}
         md={5}
          lg={4}
         
        >
    
          <Box className={classes.login_grid_form_box}>
           {props.children}
          </Box>

          <Box className={classes.login_grid_logo_sub}>
            <Box className={classes.imageLogo}>
              <Image alt="HOPS" src={login_hops_logo} />
            </Box>

            <Box display={"flex"} flexDirection={"column"}>
              <Typography className={classes.login_grid_logo_sub_forMoreInfo}>
                For more info visit :
              </Typography>
              <Box display={"flex"}>
                <Image alt="Global" src={login_earth} height={19} width={19} />
                <Typography className={classes.login_grid_logo_sub_hopsLink}>
                  <a href="https://hops.healthcare/"> hops.healthcare</a>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
