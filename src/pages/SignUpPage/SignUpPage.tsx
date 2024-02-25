import { FC } from "react";
import { Box } from "@mui/material";
import { centerContainerSx } from "@src/styles/styles";
import { SignUpWidget } from "@src/widgets/SignUpWidget";

export const SignUpPage: FC = () => {
  return (
    <Box sx={centerContainerSx}>
      <SignUpWidget />
    </Box>
  );
};
