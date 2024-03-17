import React, { FC } from "react";
import {
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
  GridCallbackDetails,
} from "@mui/x-data-grid";
import { getLocalizationLocaleText } from "@shared/ui";
import { usePermissionsTableColumns } from "./columns";
import { PermissionTableToolbar } from "./Toolbar";

export const PermissionsTable: FC<Partial<DataGridProps>> = (props) => {
  const { data: me } = useUsersControllerFindMeQuery();
  const { data, isLoading } = usePermissionsControllerFindAllQuery();
  const { data: subjects } = useSubjectsControllerFindAllQuery();
  const [rows, setRows] = React.useState<GridRowModel[]>([]);
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

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow!.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };
  const columns = usePermissionsTableColumns({
    handleEditClick,
    handleSaveClick,
    handleDeleteClick,
    handleCancelClick,
    rowModesModel,
    subjects,
  });

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false };
    console.log("updatedRow", updatedRow);
    return updatedRow;
  };

  const handleRowModesModelChange = (
    newRowModesModel: GridRowModesModel,
    details: GridCallbackDetails
  ) => {
    setRowModesModel(newRowModesModel);
  };

  React.useEffect(() => {
    if (data) {
      setRows(data);
    }
  }, [data]);
  return (
    <>
      <DataGrid
        rows={rows}
        columns={columns}
        slots={{
          toolbar: PermissionTableToolbar,
          ...props.slots,
        }}
        slotProps={{
          toolbar: {
            setRows,
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
