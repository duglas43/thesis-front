import React, { FC } from "react";
import {
  ACTIONS,
  PermissionDto,
  usePermissionsControllerFindAllQuery,
  usePermissionsControllerCreateMutation,
  usePermissionsControllerRemoveMutation,
  usePermissionFieldsControllerCreateMutation,
  usePermissionFieldsControllerRemoveMutation,
  usePermissionsControllerUpdateMutation,
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
  const [createPermission, { isLoading: isCreating }] =
    usePermissionsControllerCreateMutation();
  const [updatePermission, { isLoading: isUpdating }] =
    usePermissionsControllerUpdateMutation();
  const [deletePermission, { isLoading: isDeleting }] =
    usePermissionsControllerRemoveMutation();
  const [createPermissionField, { isLoading: isCreatingField }] =
    usePermissionFieldsControllerCreateMutation();
  const [deletePermissionField, { isLoading: isDeletingField }] =
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
    deletePermission({ id: Number(id) });
  };

  const handleAddClick = async () => {
    const newPermission = await createPermission({
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
  const processRowUpdate = async (
    newRow: GridRowModel<PermissionDto>,
    oldRow: GridRowModel<PermissionDto>
  ) => {
    await updatePermission({
      id: Number(newRow.id),
      updatePermissionDto: {
        modality: newRow.modality,
        action: newRow.action,
        subjectId: Number(newRow.subjectId),
        condition: newRow.condition,
      },
    });
    const fieldsToAdd = newRow.fields.filter((field) => !field.id);
    const fieldsToRemove = oldRow.fields.filter(
      (oldField) =>
        oldField.id &&
        !newRow.fields.some((newField) => newField.id === oldField.id)
    );
    for (let field of fieldsToAdd) {
      await createPermissionField({
        createPermissionFieldDto: {
          permissionId: Number(newRow.id),
          name: field.name,
        },
      });
    }
    for (let field of fieldsToRemove) {
      await deletePermissionField({ id: Number(field.id) });
    }
    await refetch();
    return newRow;
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
        localeText={me ? getLocalizationLocaleText(me.language) : undefined}
        editMode="row"
        getRowHeight={() => "auto"}
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        {...props}
        slots={{
          toolbar: PermissionTableToolbar,
          ...props.slots,
        }}
        slotProps={{
          toolbar: {
            onAddClick: handleAddClick,
            setRowModesModel,
            ...props.slotProps?.toolbar,
          },
        }}
        loading={
          isLoading ||
          isCreating ||
          isDeleting ||
          isUpdating ||
          isCreatingField ||
          isDeletingField ||
          !!props.loading
        }
      />
    </>
  );
};
