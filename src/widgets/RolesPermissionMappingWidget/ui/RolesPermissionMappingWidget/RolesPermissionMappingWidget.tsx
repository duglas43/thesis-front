import React, { FC } from "react";
import { Box, BoxProps } from "@mui/material";
import {
  ACTIONS,
  PermissionsTable,
  permissionApi,
  usePermissionsControllerCreateMutation,
} from "@src/entities/permissions";
import {
  useRolesControllerFindPermissionsQuery,
  useRolesControllerAddPermissionsMutation,
} from "@src/entities/permissions";
import { containerSx, tableContainerSx } from "@src/app/styles";
import { RolesTable } from "@src/entities/roles";
import { TagsTableProps } from "@src/shared/ui";
import { skipToken } from "@reduxjs/toolkit/query";

export interface RolesPermissionMappingWidgetProps extends BoxProps {}
export const RolesPermissionMappingWidget: FC<
  RolesPermissionMappingWidgetProps
> = (props) => {
  const [rolesSeletedIds, setRolesSeletedIds] = React.useState<
    TagsTableProps["selectedIds"]
  >([]);
  const [createPermission, { isLoading: isCreatingPermission }] =
    usePermissionsControllerCreateMutation();
  const [rolesAddPermissions, { isLoading: isRolesAddPermissions }] =
    useRolesControllerAddPermissionsMutation();

  const {
    data: rolePermissions,
    isFetching: isRolePermissionsFetching,
    refetch,
  } = useRolesControllerFindPermissionsQuery(
    rolesSeletedIds[0] ? { id: rolesSeletedIds[0] } : skipToken
  );

  const handleRoleAddPermission = async () => {
    if (rolesSeletedIds.length === 0) return;
    const newPermission = await createPermission({
      createPermissionDto: {
        modality: true,
        action: ACTIONS.Read,
        subjectId: 1,
      },
    }).unwrap();
    await rolesAddPermissions({
      id: Number(rolesSeletedIds[0]),
      body: { permissionsId: [Number(newPermission.id)] },
    }).unwrap();
    await refetch().unwrap();
    return newPermission;
  };

  return (
    <Box display="flex" gap={2} flexDirection="column" {...props}>
      <Box sx={{ ...containerSx, ...tableContainerSx }}>
        <RolesTable
          selectedIds={rolesSeletedIds}
          onTagSelectionChange={setRolesSeletedIds}
          hideToolbar={true}
          listProps={{
            sx: { mt: 1 },
          }}
        />
      </Box>
      <Box sx={{ ...containerSx, ...tableContainerSx }}>
        <PermissionsTable
          rows={rolePermissions || []}
          autoHeight
          loading={
            isRolePermissionsFetching ||
            isCreatingPermission ||
            isRolesAddPermissions
          }
          slotProps={{
            toolbar: {
              onAddClick: handleRoleAddPermission,
            },
          }}
        />
      </Box>
    </Box>
  );
};
