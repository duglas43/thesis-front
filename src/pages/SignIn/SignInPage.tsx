import { FC } from "react";
import { SignInWidget } from "@src/widgets/SignInWidget";
import { Box } from "@mui/material";
import { centerContainerSx } from "@app/styles";

export const SignInPage: FC = () => {
  return (
    <Box sx={centerContainerSx}>
      <SignInWidget />
    </Box>
  );
};
