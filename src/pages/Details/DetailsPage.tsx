import React from "react";
import { Box } from "@mui/material";
import { pageContainerSx } from "@src/app/styles";
import { DetailsEditWidget } from "@src/widgets/DetailsEditWidget";

export const DetailsPage = () => {
  return (
    <Box sx={pageContainerSx}>
      <DetailsEditWidget />
    </Box>
  );
};
