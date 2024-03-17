import React from "react";
import { pageContainerSx } from "@src/app/styles";
import { Box } from "@mui/material";
import { RolesPermissionMappingWidget } from "@src/widgets/RolesPermissionMappingWidget";

export const RolesPermissionPage = () => {
  return (
    <Box sx={pageContainerSx}>
      <RolesPermissionMappingWidget />
    </Box>
  )
};
