import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const AlertBox = (props) => {
  return (
    <>
      <Snackbar
    
        anchorOrigin={{
          vertical: `${props.vertical}`,
          horizontal: `${props.horizontal}`,
        }}
        open={props.open}
        autoHideDuration={props.autoHide}
        onClose={props.handleClose}
        TransitionComponent={props.transition}
      >
        <Alert
          onClose={props.handleClose}
          severity={props.severity}
          sx={{ width: "100%" }}
        >
          {props.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default AlertBox;
