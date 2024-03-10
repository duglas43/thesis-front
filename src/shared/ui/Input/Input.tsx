import { FC } from "react";
import { InputAdornment } from "@mui/material";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { TextFieldProps } from "@mui/material/TextField";

const StyledTextField = styled(TextField)(({ theme }) => ({
  height: "30px",
  "& .MuiOutlinedInput-root": {
    height: "30px",
    backgroundColor: "white",
  },
  "& .MuiAutocomplete-input": {
    marginTop: "-15px",
  },
  "& .MuiInputBase-input": {
    padding: "0px",
  },
  "& .MuiInputBase-root": {
    padding: "0px 14px 0px 14px",
  },
  //xs only placeholder
  "& .MuiInputBase-input::placeholder": {
    [theme.breakpoints.up("xs")]: {
      display: "block",
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
      opacity: "0",
    },
  },

  "& .MuiInputAdornment-root": {
    [theme.breakpoints.up("xs")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },

  "& .MuiAutocomplete-endAdornment": {
    top: "calc(50% - 16px)",
  },
  "& .Mui-disabled": {
    backgroundColor: theme.palette.grey[300],
  },
  "& .MuiList-root": {
    padding: "0px",
  },
}));

export type LibInputProps = TextFieldProps;
const LibInput: FC<LibInputProps> = (props) => {
  return (
    <StyledTextField
      fullWidth
      InputProps={{
        startAdornment: props.label && (
          <InputAdornment position="start">{`${
            props.label ? `${props.label}:` : ""
          }`}</InputAdornment>
        ),
        ...props.InputProps,
      }}
      placeholder={props?.label ? `${props?.label}:` : ""}
      {...props}
      label={null}
    />
  );
};

export default LibInput;
