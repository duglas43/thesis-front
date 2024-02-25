import React from "react";
import { Box } from "@mui/material";
import {
  pageContainerSx,
  containerSx,
  pageItemSx,
  tableContainerSx,
} from "@src/styles/styles";
import { UsersTable } from "@src/components/UsersTable";

export const UsersPage = () => {
  return (
    <Box sx={pageContainerSx}>
      <Box sx={pageItemSx}>
        <Box sx={containerSx}>
          <Box sx={tableContainerSx}>
            <UsersTable />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
