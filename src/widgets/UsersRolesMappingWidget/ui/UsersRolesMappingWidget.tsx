import React, { FC } from "react";
import { GridRowSelectionModel } from "@mui/x-data-grid";
import { skipToken } from "@reduxjs/toolkit/query";
import {
  useUsersControllerAddRolesMutation,
  useUsersControllerRemoveRolesMutation,
  useUsersControllerFindRolesQuery,
  UsersTable,
} from "@src/entities/users";
import { RolesTable } from "@src/entities/roles";
import { TagsTableProps, TagsTableListProps } from "@src/shared/ui";
import { Grid, GridProps, Box, Stack } from "@mui/material";
import { containerSx, pageItemSx } from "@src/app/styles";

export interface UsersRolesMappingWidgetProps extends GridProps {}
export const UsersRolesMappingWidget: FC<UsersRolesMappingWidgetProps> = (
  props
) => {
  const [addRoles] = useUsersControllerAddRolesMutation();
  const [removeRoles] = useUsersControllerRemoveRolesMutation();
  const [usersRowSelectionModel, setUsersRowSelectionModel] =
    React.useState<GridRowSelectionModel>([]);
  const [rolesSeletedIds, setRolesSeletedIds] = React.useState<
    TagsTableProps["selectedIds"]
  >([]);

  const handleAddRoles: TagsTableListProps["onDoubleClick"] = (id) => {
    if (usersRowSelectionModel.length === 0) return;
    addRoles({
      id: Number(usersRowSelectionModel[0]),
      body: {
        roleIds: [id],
      },
    });
  };
  const handleRemoveRoles: TagsTableListProps["onDoubleClick"] = (id) => {
    if (usersRowSelectionModel.length === 0) return;
    removeRoles({
      id: Number(usersRowSelectionModel[0]),
      body: {
        roleIds: [id],
      },
    });
  };

  const { data: userRoles, isFetching: isUserRolesFetching } =
    useUsersControllerFindRolesQuery(
      usersRowSelectionModel.length === 1
        ? { id: Number(usersRowSelectionModel[0]) }
        : skipToken
    );

  return (
    <Grid container spacing={2} sx={{ height: "100%" }} {...props}>
      <Grid item xs={12} md={8} sx={{ height: "100%" }}>
        <Box sx={pageItemSx}>
          <Box sx={{ ...containerSx, height: "100%" }}>
            <UsersTable
              rowSelectionModel={usersRowSelectionModel}
              onRowSelectionModelChange={setUsersRowSelectionModel}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Stack spacing={2}>
          <Box sx={containerSx}>
            <RolesTable
              selectedIds={rolesSeletedIds}
              onTagSelectionChange={setRolesSeletedIds}
              hideToolbar={true}
              listProps={{
                sx: {
                  mt: 1,
                },
                onDoubleClick: handleAddRoles,
              }}
            />
          </Box>
          <Box sx={containerSx}>
            <RolesTable
              tags={userRoles || []}
              loading={isUserRolesFetching}
              hideToolbar={true}
              hideFooter={true}
              hideSearchBar={true}
              listProps={{
                onDoubleClick: handleRemoveRoles,
              }}
            />
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};
