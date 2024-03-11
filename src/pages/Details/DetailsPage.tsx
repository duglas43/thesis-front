import React from "react";
import { Box } from "@mui/material";
import {
  pageContainerSx,
  containerSx,
  pageItemSx,
  tableContainerSx,
} from "@src/app/styles";
import { DetailsTable } from "@entities/details";

export const DetailsPage = () => {
  return (
    <Box sx={pageContainerSx}>
      <Box sx={pageItemSx}>
        <Box sx={{ ...containerSx, height: "100%" }}>
          <Box sx={tableContainerSx}>{<DetailsTable />}</Box>
        </Box>
      </Box>
    </Box>
  );
};
