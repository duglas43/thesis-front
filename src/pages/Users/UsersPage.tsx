import React from "react";
import { Box } from "@mui/material";
import {
  pageContainerSx,
  containerSx,
  pageItemSx,
  tableContainerSx,
} from "@src/app/styles";
import { UsersTable } from "@entities/users";

export const UsersPage = () => {
  return (
    <Box sx={pageContainerSx}>
      <Box sx={pageItemSx}>
        <Box sx={{ ...containerSx, height: "100%" }}>
          <Box sx={tableContainerSx}>
            <UsersTable />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
