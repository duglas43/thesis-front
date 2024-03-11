import React from "react";
import { Box } from "@mui/material";
import { pageContainerSx } from "@src/app/styles";
import { MachinesEditWidget } from "@src/widgets/MachinesEditWidget";

export const MachinesPage = () => {
  return (
    <Box sx={pageContainerSx}>
      <MachinesEditWidget />
    </Box>
  );
};
