import { FC } from "react";
import { Chip, ChipProps } from "@mui/material";

const LibTagPlaceholder: FC<ChipProps> = (props) => {
  return (
    <Chip
      {...props}
      sx={{
        minWidth: 100,
        marginRight: 1,
        marginBottom: 1,
        ...props.sx,
      }}
    />
  );
};

export default LibTagPlaceholder;
