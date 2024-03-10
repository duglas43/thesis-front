import { FC } from "react";
import { Stack, StackProps } from "@mui/material";
import { CONTAINER_SX } from "@app/styles";

const BasicCardContainer: FC<StackProps> = ({ children, ...props }) => {
  return (
    <Stack
      {...props}
      sx={{
        ...CONTAINER_SX,
        pt: 0,
        mb: 2,
        position: "relative",
        ...props.sx,
      }}
    >
      {children}
    </Stack>
  );
};

export default BasicCardContainer;
