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
import { Can } from "@entities/casl";
import { SUBJECTS, ACTIONS } from "@shared/types";

export interface DetailsTableToolbarProps {
  onAddRecord: () => void;
}
export const DetailsTableToolbar: FC<DetailsTableToolbarProps> = React.memo(
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
          <Can I={ACTIONS.CREATE} a={SUBJECTS.DETAIL} passThrough>
            {(allowed) => (
              <Button
                color="primary"
                startIcon={<AddIcon />}
                disabled={!allowed}
                onClick={() => {
                  onAddRecord();
                }}
              >
                {t("addRecord")}
              </Button>
            )}
          </Can>
          <GridToolbarColumnsButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport />
        </Box>
        <GridToolbarQuickFilter />
      </GridToolbarContainer>
    );
  }
);
