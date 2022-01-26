import React,{useState} from "react";
import TextFieldComp from "../../common/textField/TextFieldComp";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Router from "next/router";
import Typography from "@mui/material/Typography";
import classes from "./ResetPasswordForm.module.scss";
import Link from "next/link";
import InputAdornment from "@mui/material/InputAdornment";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import AlertBox from "../../common/alertBox/AlertBox";
import CircularProgress from '@mui/material/CircularProgress';
import Fade from '@mui/material/Fade';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function ResetPasswordForm() {
  const { control, handleSubmit, error,  formState: { isSubmitting, isDirty, isValid }  } = useForm({
    mode: "onChange",
  });
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState([false, "none"]);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  const onSubmit = (data) => {
    setLoading([true, "block"]);
    handleClick();
    console.log(data);
    setTimeout(() => {
      Router.push("/login");
    }, 2000);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.resetForm}>
        <AlertBox
          severity="info"
          message="We sent you reset password mail"
          vertical="top"
          horizontal="center"
          open={open}
          handleClose={handleClose}
          autoHide={4000}
        />

        <Typography
          variant="h4"
          component="div"
          className={classes.resetForm_typo_forgot}
        >
          <strong> Forgot your password?</strong>
        </Typography>

        <Typography
          variant="h6"
          component="span"
          className={classes.resetForm_typo_reset}
        >
          Reset Password by you Mail
        </Typography>
        <TextFieldComp
          fullWidth
          name="email"
          label="Email"
          control={control}
          type="text"
          variant="standard"
          rules={{
            required: "Email is required.",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address.",
            },
          }}
          adornments={
            <InputAdornment position="start">
              <EmailOutlinedIcon fontSize="small" />
            </InputAdornment>
          }
        />

        <Button
          fullWidth
          type="submit"
          variant="contained"
          className={classes.resetForm_btn_reset}
          disabled={!isDirty || !isValid} 
        >
             <Fade
            style={{
             padding:"10px",color:"#fff",display:`${loading[1]}`
            }}
          in={loading[0]}
        >
          <CircularProgress />
        </Fade>
         &nbsp;
          RESET PASSWORD
        </Button>

        <Typography display={"flex"} justifyContent={"center"}>
          <small role="button">
            <Link href="/login">
              <a className="link_class" role="button">
                &nbsp;&nbsp; Back To the Log in Page
              </a>
            </Link>
          </small>
        </Typography>
      </form>
    </>
  );
}

export default ResetPasswordForm;
