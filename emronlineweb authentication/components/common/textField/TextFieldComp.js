
import React from "react";
import TextField from "@mui/material/TextField";
import { useController } from "react-hook-form";
import InputLabel from '@mui/material/InputLabel';
import InputBase from '@mui/material/InputBase';
import classes from './TextFieldComp.module.scss'
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

const TextFieldComp = ({ control,name ,rules,defaultValue , type ,variant ,spinButton,plane,adornments, ...props}) => {

    const {
        field: { onChange, onBlur, value, ref  },
        fieldState: { invalid, isTouched, isDirty , error },
        formState: { touchedFields, dirtyFields }
      } = useController({
        name,
        control,
        rules: rules,
        defaultValue: defaultValue,
      });
      
      return (
    <>
       

<InputLabel className={classes.inputLabel} shrink htmlFor="bootstrap-input">
{props.label=== undefined? name : props.label}
        </InputLabel>
        
        <TextField 
         
        // className={spinButton === true? `${ classes.TextField , classes.input , classes.label}`:`spinButton ${classes.TextField , classes.input , classes.label}` }
          className={classes.filledInputClass }
          type={type}
          onChange={onChange} // send value to hook form 
          onBlur={onBlur} // notify when input is touched/blur
          value={value === null ? " " : (value === undefined ? "" : value)} // input value
          name={name} // send down the input name
          inputRef={ref} // send input ref, so we can focus on input when error appear
          error={invalid}
          variant={"outlined"}
          helperText={error?.message}
          autoComplete="off"
          InputProps={{
            startAdornment: adornments,
            classes: {
                root: classes.input,
                focused: classes.input,
                notchedOutline: classes.input,
                
            },
        }}
        />

       </>

      );
}

export default TextFieldComp

