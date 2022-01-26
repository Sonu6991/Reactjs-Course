import { InputLabel, TextField } from "@mui/material";
import React from "react";
import { useController } from "react-hook-form";
import classes from "./TextFieldInput.module.scss";
const TextFieldInput = ({
  name,
  control,
  label,
  rules,
  className,
  plane,
  isdisable,
  readOnly,
  inputValue,
}) => {
  const {
    field: { ref, ...field },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    rules,
  });
  const style = plane ? classes.planeInput : classes.OutlinedInput;

  return (
    <>
      <InputLabel className={classes.label}>{label}</InputLabel>
      <TextField
        className={className}
        disabled={isdisable}
        variant="outlined"
        size="small"
        fullWidth
        InputProps={{
          readOnly: readOnly ? true : false,
          classes: {
            root: style,
            focused: style,
            notchedOutline: style,
          },
        }}
        {...field}
        error={invalid}
        inputRef={ref}
        value={inputValue ? inputValue : field.value}
        autoComplete="off"
        helperText={error ? error.message : ""}
      />
    </>
  );
};
export default TextFieldInput;
