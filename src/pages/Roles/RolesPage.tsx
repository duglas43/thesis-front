import React from "react";
import { Box } from "@mui/material";
import { pageContainerSx, pageItemSx, tableContainerSx } from "@src/app/styles";
import { RolesEditWidget } from "@src/widgets/RolesEditWidget";

export const RolesPage = () => {
  return (
    <Box sx={pageContainerSx}>
      <RolesEditWidget />
    </Box>
  );
};
