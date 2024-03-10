import { FC } from "react";
import {
  FormControl,
  Select as MuiSelect,
  SelectProps,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledSelect = styled(MuiSelect)(({ theme }) => ({
  height: "30px",
  padding: "0px 14px",
  "& .MuiSelect-select": {
    padding: "0px 0px",
  },
  "&.Mui-disabled": {
    backgroundColor: theme.palette.grey[300],
  },
}));

export interface LibSelectProps extends SelectProps {
  options: anyStringObject;
}
const LibSelect: FC<LibSelectProps> = ({ value, options, label, ...props }) => {
  return (
    <FormControl fullWidth hiddenLabel={true}>
      {!value && (
        <InputLabel
          id="my-select"
          sx={{
            top: "-13px",
            "&.Mui-focused": {
              opacity: 0,
            },
          }}
        >
          {label}
        </InputLabel>
      )}
      <StyledSelect value={value} labelId="my-select" {...props}>
        {Object.keys(options).map((key) => (
          <MenuItem key={key} value={key}>
            {options[key]}
          </MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};

export default LibSelect;
