import { Button } from "@mui/material";
import React from "react";
import classes from "./ButtonComp.module.scss";

const ButtonComp = (props) => {
  const styles = props.color === "blue" ? classes.blue : classes.gray;
  return (
    <Button
      type={props.type}
      onClick={props.onClick}
      className={`${classes.btn} ${styles} ${props.className}`}
    >
      {props.children}
    </Button>
  );
};

export default ButtonComp;
