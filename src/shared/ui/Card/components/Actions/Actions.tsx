import React, { FC } from "react";
import { Box } from "@mui/material";

const BasicCardActions: FC<{
  children?: React.ReactNode;
}> = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        position: "absolute",
        bottom: "0px",
        right: "0px",
        width: "100%",
      }}
    >
      {props.children}
    </Box>
  );
};

export default BasicCardActions;
