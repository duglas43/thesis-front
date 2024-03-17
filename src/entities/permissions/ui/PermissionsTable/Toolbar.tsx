import React, { FC } from "react";
import { CreatePermissionDto, ACTIONS } from "@src/entities/permissions";
import {
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarColumnsButton,
  GridToolbarQuickFilter,
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
} from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useTranslation } from "react-i18next";

export interface PermissionTableToolbarProps {
  setRows: (
    newRows: (
      oldRows: GridRowsProp<CreatePermissionDto>
    ) => GridRowsProp<Partial<CreatePermissionDto>>
  ) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel
  ) => void;
}
export const PermissionTableToolbar: FC<PermissionTableToolbarProps> =
  React.memo(({ setRows, setRowModesModel }) => {
    const id = "new";
    const handleClick = () => {
      setRows((oldRows) => [
        ...oldRows,
        { modality: true, action: ACTIONS.Read, id: "new" },
      ]);
      setRowModesModel((oldModel) => ({
        ...oldModel,
        [id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
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
        <GridToolbarQuickFilter />
      </GridToolbarContainer>
    );
  });
