import React, { FC } from "react";
import {
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarColumnsButton,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useTranslation } from "react-i18next";

export interface MachineTableToolbarProps {
  onAddRecord: () => void;
}
export const MachineTableToolbar: FC<MachineTableToolbarProps> = React.memo(
  ({ onAddRecord }) => {
    const { t } = useTranslation();
    return (
      <GridToolbarContainer
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Button
            color="primary"
            startIcon={<AddIcon />}
            onClick={() => {
              onAddRecord();
            }}
          >
            {t("addRecord")}
          </Button>
          <GridToolbarColumnsButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport />
        </Box>
        <GridToolbarQuickFilter />
      </GridToolbarContainer>
    );
  }
);