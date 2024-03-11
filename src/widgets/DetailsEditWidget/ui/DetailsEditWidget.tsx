import React, { FC } from "react";
import { GridRowSelectionModel } from "@mui/x-data-grid";
import {
  DetailsTable,
  DetailEditForm,
  useDetailsControllerFindOneQuery,
  useDetailsControllerUpdateMutation,
} from "@entities/details";
import { skipToken } from "@reduxjs/toolkit/query";
import { Grid, GridProps, Box } from "@mui/material";
import { containerSx, pageItemSx } from "@src/app/styles";

export interface DetailsEditWidgetProps extends GridProps {}
export const DetailsEditWidget: FC<DetailsEditWidgetProps> = (props) => {
  const [rowSelectionModel, setRowSelectionModel] =
    React.useState<GridRowSelectionModel>([]);
  const [updateDetail] = useDetailsControllerUpdateMutation();
  const { data: role } = useDetailsControllerFindOneQuery(
    rowSelectionModel[0] ? { id: Number(rowSelectionModel[0]) } : skipToken
  );
  return (
    <Grid container spacing={2} sx={{ height: "100%" }} {...props}>
      <Grid item xs={12} md={8} sx={{ height: "100%" }}>
        <Box sx={pageItemSx}>
          <Box sx={{ ...containerSx, height: "100%" }}>
            <DetailsTable
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
          <DetailEditForm
            initialValues={role}
            onSubmit={(values) => {
              updateDetail({
                id: values.id,
                updateDetailDto: values.updateDetailDto,
              });
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};
