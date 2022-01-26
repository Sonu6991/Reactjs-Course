import { Box } from "@mui/material";
import React from "react";
import classes from "./StepBox.module.scss";

const StepBox = (props) => {
  return (
    <Box
      className={`${classes.box} ${
        props.outlined ? classes.outlinedBox : classes.filledBox
      } ${props.className} `}
    >
      {props.children}
    </Box>
  );
};

export default StepBox;
