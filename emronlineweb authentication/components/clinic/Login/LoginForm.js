import React, { useState } from "react";
import TextFieldComp from "../../common/textField/TextFieldComp";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Router from "next/router";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import classes from "./LoginForm.module.scss";
import CheckBoxComp from "../../common/checkBox/CheckBoxComp";
import Link from "next/link";
import InputAdornment from "@mui/material/InputAdornment";
import login_pass_key from "../../../public/assets/svg/login_pass_key.svg";
// import { loginUser } from "../../../authenticate/auth/auth";
import Image from "next/image";
import AlertBox from "../../common/alertBox/AlertBox";
import CircularProgress from "@mui/material/CircularProgress";
import Fade from "@mui/material/Fade";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useAuth } from "../../../authenticate/auth/auth";

function LoginForm() {
  const { loginUser ,isAuthenticated} = useAuth();
  const {
    control,
    handleSubmit,
    error,
    formState: { isDirty, isValid },
  } = useForm({
    mode: "all",
  });
 
  const [loading, setLoading] = useState([false, "none"]);
  const [open, setOpen] = useState(false);
  const [feedBack , setFeedBack] = useState({message:"Successfully you have logged in", severity:"success"})
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  const onSubmit = (data) => {
    setLoading([true, "block"]);

    let email = data.email;
    let password = data.password;
     
    loginUser(email, password)
      .then((res) => {
        
        setFeedBack(
          {message:"Successfully you have logged in", severity:"success"}
        )
        handleClick();
       
         
    
       

        setLoading([false, "none"]);
      })
      .catch((err) => {
        setLoading([false, "none"]);
        setFeedBack(
          {message:"Invalid Credential", severity:"error"} 
        )
        handleClick();
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.loginForm}>
      
        <AlertBox
          severity={feedBack.severity}
          message={feedBack.message}
          vertical="top"
          horizontal="center"
          open={open}
          handleClose={handleClose}
          autoHide={3000}
        />
        <Typography
          variant="h4"
          component="div"
          className={classes.loginForm_typo_welcome}
        >
          <strong> Welcome!</strong>
        </Typography>

        <Typography
          variant="h6"
          component="span"
          className={classes.loginForm_typo_pleaseLogin}
        >
          Please Log in to Get Started
        </Typography>
        <TextFieldComp
          fullWidth
          name="email"
          label="Email"
          control={control}
          type="mail"
          variant="standard"
          defaultValue="admin@emr.in"
          adornments={
            <InputAdornment position="start">
              <EmailOutlinedIcon fontSize="small" />
            </InputAdornment>
          }
          rules={{
            required: "Email is required.",
            // pattern: {
            //   value:
            //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            //   message: "invalid Email",
            // },
          }}
        />

        <TextFieldComp
          fullWidth
          name="password"
          label="Password"
          control={control}
          type="password"
          variant="standard"
          defaultValue="Admin@1234"
          rules={{
            required: "Password is required.",
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i,
              message: "invalid Password",
            },
          }}
          adornments={
            <InputAdornment position="start">
              <Image
                alt="password"
                src={login_pass_key}
                height={20}
                width={20}
              />
            </InputAdornment>
          }
        />

        <Box className={classes.loginForm_box}>
          <CheckBoxComp
            name="rememberMe"
            control={control}
            label={
              <small className={classes.loginForm_uni_typo}>Remember me</small>
            }
          />
          <Typography component="small">
            <small role="button">
              <Link href={"./reset-password"}>
                <a className={"link_class"}> Forgot Password ?</a>
              </Link>
            </small>
          </Typography>
        </Box>

        <Button
          fullWidth
          type="submit"
          variant="contained"
          className={classes.loginForm_btn_singin}
          //disabled={!isDirty || !isValid}
        >
          <Fade
            style={{
              padding: "10px",
              color: "#fff",
              display: `${loading[1]}`,
            }}
            in={loading[0]}
          >
            <CircularProgress />
          </Fade>
          &nbsp; SIGN IN
        </Button>

        <Typography display={"flex"} justifyContent={"center"}>
          <small className={classes.loginForm_uni_typo}>
            Not Registered yet?{" "}
          </small>
          <small role="button">
            <Link href="/registration">
              <a className="link_class" role="button">
                &nbsp;&nbsp; Regester Here
              </a>
            </Link>
          </small>
        </Typography>
      </form>
    </>
  );
}

export default LoginForm;
