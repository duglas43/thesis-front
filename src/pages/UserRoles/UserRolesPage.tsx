import React from "react";
import { Box } from "@mui/material";
import { pageContainerSx } from "@src/app/styles";
import { UsersRolesMappingWidget } from "@src/widgets/UsersRolesMappingWidget";

export const UserRolesPage = () => {
  return (
    <Box sx={pageContainerSx}>
      <UsersRolesMappingWidget />
    </Box>
  );
};
