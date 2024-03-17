import React from "react";
import { pageContainerSx } from "@src/app/styles";
import { Box } from "@mui/material";
import { UsersPermissionMappingWidget } from "@src/widgets/UserPermissionMappingWidget";

export const UserPermissionPage = () => {
  return (
    <Box sx={pageContainerSx}>
      <UsersPermissionMappingWidget />
    </Box>
  );
};
