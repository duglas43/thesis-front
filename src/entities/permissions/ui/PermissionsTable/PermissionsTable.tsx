import React, { FC } from "react";
import {
  ACTIONS,
  usePermissionsControllerFindAllQuery,
  usePermissionsControllerCreateMutation,
  usePermissionsControllerRemoveMutation,
  usePermissionConditionsControllerCreateMutation,
  usePermissionConditionsControllerRemoveMutation,
  usePermissionFieldsControllerCreateMutation,
  usePermissionFieldsControllerRemoveMutation,
} from "@entities/permissions";
import { useSubjectsControllerFindAllQuery } from "@src/shared/api";
import { useUsersControllerFindMeQuery } from "@entities/users";
import {
  DataGrid,
  DataGridProps,
  GridRowModesModel,
  GridRowModes,
  GridRowId,
  GridRowModel,
  GridEventListener,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";
import { getLocalizationLocaleText } from "@shared/ui";
import { usePermissionsTableColumns } from "./columns";
import { PermissionTableToolbar } from "./Toolbar";

export const PermissionsTable: FC<Partial<DataGridProps>> = (props) => {
  const { data: me } = useUsersControllerFindMeQuery();
  const { data, isLoading, refetch } = usePermissionsControllerFindAllQuery();
  const { data: subjects } = useSubjectsControllerFindAllQuery();
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>(
    {}
  );
  const [createdPermission, { isLoading: isCreating }] =
    usePermissionsControllerCreateMutation();
  const [deletedPermission, { isLoading: isDeleting }] =
    usePermissionsControllerRemoveMutation();
  const [createdPermissionCondition, { isLoading: isCreatingCondition }] =
    usePermissionConditionsControllerCreateMutation();
  const [deletedPermissionCondition, { isLoading: isDeletingCondition }] =
    usePermissionConditionsControllerRemoveMutation();
  const [createdPermissionField, { isLoading: isCreatingField }] =
    usePermissionFieldsControllerCreateMutation();
  const [deletedPermissionField, { isLoading: isDeletingField }] =
    usePermissionFieldsControllerRemoveMutation();

  const handleRowEditStop: GridEventListener<"rowEditStop"> = (
    params,
    event
  ) => {
    if (
      params.reason === GridRowEditStopReasons.rowFocusOut ||
      params.reason === GridRowEditStopReasons.enterKeyDown
    ) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };
  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };
  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });
  };
  const handleDeleteClick = (id: GridRowId) => () => {
    deletedPermission({ id: Number(id) });
  };

  const handleAddClick = async () => {
    const newPermission = await createdPermission({
      createPermissionDto: {
        modality: true,
        action: ACTIONS.Read,
        subjectId: 1,
      },
    }).unwrap();
    await refetch();
    return newPermission;
  };
  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };
  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false };
    console.log("updatedRow", updatedRow);
    return updatedRow;
  };

  const columns = usePermissionsTableColumns({
    handleEditClick,
    handleSaveClick,
    handleDeleteClick,
    handleCancelClick,
    rowModesModel,
    subjects,
  });
  return (
    <>
      <DataGrid
        rows={data || []}
        columns={columns}
        slots={{
          toolbar: PermissionTableToolbar,
          ...props.slots,
        }}
        slotProps={{
          toolbar: {
            onAddClick: handleAddClick,
            setRowModesModel,
          },
          ...props.slotProps,
        }}
        localeText={me ? getLocalizationLocaleText(me.language) : undefined}
        editMode="row"
        getRowHeight={() => "auto"}
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        {...props}
        loading={isLoading || isCreating || isDeleting || props.loading}
      />
    </>
  );
};
