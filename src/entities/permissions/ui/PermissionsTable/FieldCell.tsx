import React, { FC } from "react";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { Chip, Box } from "@mui/material";

export interface PermissionTableFieldCellProps extends GridRenderCellParams {}
export const PermissionTableFieldCell: FC<PermissionTableFieldCellProps> = (
  props
) => {
  const fields = props.value as any[];
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        overflow: "auto",
        m: 0,
        p: 0,
      }}
    >
      {fields.map((field, index) => (
        <Chip key={index} label={field.name} />
      ))}
    </Box>
  );
};
