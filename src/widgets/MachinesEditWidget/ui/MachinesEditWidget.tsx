import React, { FC } from "react";
import { GridRowSelectionModel } from "@mui/x-data-grid";
import {
  MachinesTable,
  MachineEditForm,
  useMachinesControllerFindOneQuery,
  useMachinesControllerUpdateMutation,
} from "@entities/machines";
import { skipToken } from "@reduxjs/toolkit/query";
import { Grid, GridProps, Box } from "@mui/material";
import { containerSx, pageItemSx } from "@src/app/styles";

export interface MachinesEditWidgetProps extends GridProps {}
export const MachinesEditWidget: FC<MachinesEditWidgetProps> = (props) => {
  const [rowSelectionModel, setRowSelectionModel] =
    React.useState<GridRowSelectionModel>([]);
  const [updateMachine] = useMachinesControllerUpdateMutation();
  const { data: role } = useMachinesControllerFindOneQuery(
    rowSelectionModel[0] ? { id: Number(rowSelectionModel[0]) } : skipToken
  );
  return (
    <Grid container spacing={2} sx={{ height: "100%" }} {...props}>
      <Grid item xs={12} md={8} sx={{ height: "100%" }}>
        <Box sx={pageItemSx}>
          <Box sx={{ ...containerSx, height: "100%" }}>
            <MachinesTable
              sx={{ height: "100%" }}
              onRowSelectionModelChange={(newRowSelectionModel) => {
                setRowSelectionModel(newRowSelectionModel);
              }}
              rowSelectionModel={rowSelectionModel}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box sx={containerSx}>
          <MachineEditForm
            initialValues={role}
            onSubmit={(values) => {
              updateMachine({
                id: values.id,
                updateMachineDto: values.updateMachineDto,
              });
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};
