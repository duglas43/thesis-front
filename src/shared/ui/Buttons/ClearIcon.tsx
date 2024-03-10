import { FC } from "react";
import { IconButton, IconButtonProps } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const LibButtonsClearIcon: FC<IconButtonProps> = (props) => {
  return (
    <IconButton color="error" size="small" {...props}>
      <CloseIcon />
    </IconButton>
  );
};

export default LibButtonsClearIcon;
