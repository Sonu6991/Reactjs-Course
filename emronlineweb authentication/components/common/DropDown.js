import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import classes from "./TextFieldInput.module.scss";
// import { createTheme } from "@mui/material";
// import { ThemeProvider } from "@emotion/react";

// const theme = createTheme({
//   MuiInput: {
//     root: {
//       borderColor: "#fff",
//     },
//   },
// });

const DropDown = React.forwardRef((props, ref) => {
  const {
    label,
    plane,
    isdisable,
    className,
    invalid,
    error,
    items,
    displayItem,
    ...field
  } = props;

  const errorMsg = () => {
    if (error) {
      if (error.type === "required") {
        return `${label} is required!`;
      }
    }
  };
  return (
    <>
      <InputLabel className={classes.label}>{label}</InputLabel>
      <FormControl className={classes.formControl} style={{ width: "100%" }}>
        <Select
          variant="outlined"
          fullWidth
          {...field}
          inputRef={ref}
          error={invalid}
        >
          {items.map((item, index) => {
            return (
              <MenuItem
                key={index}
                value={displayItem ? item[displayItem] : item}
              >
                {displayItem ? item[displayItem] : item}
              </MenuItem>
            );
          })}
        </Select>
        <FormHelperText>{error ? errorMsg() : ""}</FormHelperText>
      </FormControl>
    </>
  );
});
export default DropDown;
