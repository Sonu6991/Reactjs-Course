import { IconButton, InputLabel } from "@mui/material";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import React, { useCallback, useState } from "react";
import { useController } from "react-hook-form";
import classes from "./ImageInput.module.scss";
import { getBase64 } from "../utils";

const ImageInput = ({ name, control, label, rules }) => {
  const [fileValue, setFileValue] = useState("");
  const [image, setImage] = useState();
  const {
    field: { ref, ...field },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    rules,
  });

  const onImageChange = useCallback(async (event, field) => {
    setFileValue(event.target.value);
    if (event.target.files?.[0]) {
      const picture = await getBase64(event.target.files[0]);
      setImage(picture);
      field.onChange(event.target.files);
    }
  }, []);
  return (
    <>
      <InputLabel className={classes.inputLabel}>{label}</InputLabel>
      <div className={classes.logo}>
        <label htmlFor={name}>
          <input
            accept="image/*"
            {...field}
            hidden
            id={name}
            type="file"
            value={fileValue}
            onChange={() => onImageChange(event, field)}
          />
          {image ? (
            <Image
              src={image}
              alt="image"
              width={300}
              height={110}
              objectFit="contain"
              quality={100}
            />
          ) : (
            <IconButton
              color="primary"
              className={classes.attachBtn}
              aria-label="upload picture"
              component="span"
            >
              <AddIcon />
            </IconButton>
          )}
        </label>
        {/* <span>{fileValue && getValues("registrationClinicLogo")[0].name}</span> */}
      </div>
    </>
  );
};

export default ImageInput;
