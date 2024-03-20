import React, { FC } from "react";
import { Box, BoxProps } from "@mui/material";
import { GridInputRowSelectionModel } from "@mui/x-data-grid";
import {
  ACTIONS,
  PermissionsTable,
  usePermissionsControllerCreateMutation,
} from "@src/entities/permissions";
import {
  useUsersControllerFindPermissionsQuery,
  useUsersControllerAddPermissionsMutation,
} from "@src/entities/permissions";
import { containerSx, tableContainerSx } from "@src/app/styles";
import { UsersTable } from "@src/entities/users";
import { skipToken } from "@reduxjs/toolkit/query";

export interface UsersPermissionMappingWidgetProps extends BoxProps {}
export const UsersPermissionMappingWidget: FC<
  UsersPermissionMappingWidgetProps
> = (props) => {
  const [selectionModel, setSelectionModel] =
    React.useState<GridInputRowSelectionModel>([]);
  const [createPermission, { isLoading: isCreatingPermission }] =
    usePermissionsControllerCreateMutation();
  const [usersAddPermissions, { isLoading: isUsersAddPermissions }] =
    useUsersControllerAddPermissionsMutation();

  const {
    data: userPermissions,
    isFetching: isUserPermissionsFetching,
    refetch,
  } = useUsersControllerFindPermissionsQuery(
    selectionModel ? { id: Number(selectionModel) } : skipToken
  );

  const handleUserAddPermission = async () => {
    if (!selectionModel) return;
    const newPermission = await createPermission({
      createPermissionDto: {
        modality: true,
        action: ACTIONS.Read,
        subjectId: 1,
      },
    }).unwrap();
    await usersAddPermissions({
      id: Number(selectionModel),
      body: { permissionIds: [Number(newPermission.id)] },
    });
    await refetch().unwrap();
    return newPermission;
  };

  return (
    <Box display="flex" gap={2} flexDirection="column" {...props}>
      <Box sx={{ ...containerSx, ...tableContainerSx }}>
        <UsersTable
          rowSelectionModel={selectionModel}
          onRowSelectionModelChange={setSelectionModel}
        />
      </Box>
      <Box sx={{ ...containerSx, ...tableContainerSx }}>
        <PermissionsTable
          rows={userPermissions || []}
          loading={
            isUserPermissionsFetching ||
            isCreatingPermission ||
            isUsersAddPermissions
          }
          autoHeight
          slotProps={{
            toolbar: {
              onAddClick: handleUserAddPermission,
            },
          }}
        />
      </Box>
    </Box>
  );
};
