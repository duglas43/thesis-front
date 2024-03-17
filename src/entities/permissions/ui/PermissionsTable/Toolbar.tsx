import React, { FC } from "react";
import { PermissionDto } from "@src/entities/permissions";
import {
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarColumnsButton,
  GridRowModesModel,
  GridRowModes,
} from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useTranslation } from "react-i18next";

export interface PermissionTableToolbarProps {
  onAddClick: () => Promise<PermissionDto>;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel
  ) => void;
}
export const PermissionTableToolbar: FC<PermissionTableToolbarProps> =
  React.memo(({ onAddClick, setRowModesModel }) => {
    const handleClick = async () => {
      const newPermission = await onAddClick();
      setRowModesModel((oldModel) => ({
        ...oldModel,
        [newPermission.id]: {
          mode: GridRowModes.Edit,
          fieldToFocus: "modality",
        },
      }));
    };

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
          <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
            {t("addRecord")}
          </Button>
          <GridToolbarColumnsButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport />
        </Box>
      </GridToolbarContainer>
    );
  });
