import React from "react";
import { Box } from "@mui/material";
import { pageContainerSx, containerSx, pageItemSx } from "@src/app/styles";
import { CurrentUserUpdateWidget } from "@widgets/CurrentUserUpdateWIdget";

export const ProfilePage = () => {
  return (
    <Box sx={pageContainerSx}>
      <Box
        sx={{
          ...containerSx,
          maxWidth: "600px",
          margin: "auto",
        }}
      >
        <CurrentUserUpdateWidget />
      </Box>
    </Box>
  );
};
