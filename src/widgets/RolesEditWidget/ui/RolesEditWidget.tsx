import React, { FC } from "react";
import {
  RolesTable,
  RoleEditForm,
  useRolesControllerFindOneQuery,
  useRolesControllerUpdateMutation,
} from "@entities/roles";
import { skipToken } from "@reduxjs/toolkit/query";
import { Grid, GridProps, Box } from "@mui/material";
import { containerSx, pageItemSx } from "@src/app/styles";

export interface RolesEditWidgetProps extends GridProps {}
export const RolesEditWidget: FC<RolesEditWidgetProps> = (props) => {
  const [selectedRolesIds, setSelectedRolesIds] = React.useState<number[]>([]);
  const [updateRole] = useRolesControllerUpdateMutation();
  const { data: role } = useRolesControllerFindOneQuery(
    selectedRolesIds[0] ? { id: selectedRolesIds[0] } : skipToken
  );
  return (
    <Grid container spacing={2} sx={{ height: "100%" }} {...props}>
      <Grid item xs={12} md={8} sx={{ height: "100%" }}>
        <Box sx={pageItemSx}>
          <Box sx={{ ...containerSx, height: "100%" }}>
            <RolesTable
              sx={{ height: "100%" }}
              selectedIds={selectedRolesIds}
              onTagSelectionChange={(ids) => setSelectedRolesIds(ids)}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box sx={containerSx}>
          <RoleEditForm
            initialValues={role}
            onSubmit={(values) => {
              updateRole({
                id: values.id,
                updateRoleDto: values.updateRoleDto,
              });
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};
