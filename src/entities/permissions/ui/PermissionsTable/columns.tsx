import React from "react";
import {
  GridColDef,
  GridActionsCellItem,
  GridRowId,
  GridRowModesModel,
  GridRowModes,
} from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import { useTranslation } from "react-i18next";
import { SubjectDto } from "@src/shared/api";
import { PermissionDto, ACTIONS } from "@entities/permissions";
import DeleteIcon from "@mui/icons-material/Delete";
import { TagCell } from "@src/shared/ui";
import { PermissionTableFieldCell } from "./FieldCell";
import { MonacoEditorEditCell } from "./MonacoEditorEditCell";

export interface usePermissionsTableColumnsProps {
  handleEditClick: (id: GridRowId) => () => void;
  handleSaveClick: (id: GridRowId) => () => void;
  handleDeleteClick: (id: GridRowId) => () => void;
  handleCancelClick: (id: GridRowId) => () => void;
  subjects?: SubjectDto[];
  rowModesModel: GridRowModesModel;
}
export const usePermissionsTableColumns = ({
  handleEditClick,
  handleSaveClick,
  handleDeleteClick,
  handleCancelClick,
  subjects,
  rowModesModel,
}: usePermissionsTableColumnsProps) => {
  const { t } = useTranslation();
  const columns = React.useMemo<GridColDef<PermissionDto>[]>(
    () => [
      {
        field: "modality",
        sortable: false,
        headerName: t("modality"),
        type: "singleSelect",
        valueOptions: [
          {
            id: true,
            name: t("can"),
          },
          {
            id: false,
            name: t("cannot"),
          },
        ],
        getOptionLabel: (option: any) => option.name,
        getOptionValue: (option: any) => option.id,
        editable: true,
        width: 103,
        valueFormatter: (params) => (params.value ? t("can") : t("cannot")),
        filterable: false,
      },
      {
        field: "action",
        sortable: false,
        headerName: t("action"),
        type: "singleSelect",
        valueOptions: Object.values(ACTIONS).map((action) => ({
          id: action,
          name: t(action),
        })),
        getOptionLabel: (option: any) => option.name,
        getOptionValue: (option: any) => option.id,
        editable: true,
        width: 107,
        filterable: false,
        valueFormatter: (params) => t(params.value),
      },
      {
        field: "subject",
        sortable: false,
        headerName: t("subject"),
        type: "singleSelect",
        valueOptions: subjects,
        getOptionLabel: (option: SubjectDto) => option.name,
        getOptionValue: (option: SubjectDto) => option.id,
        editable: true,
        width: 200,
        filterable: false,
        valueGetter: (params) => params.row?.subjectId,
        valueSetter: (params) => ({
          ...params.row,
          subjectId: params.value,
        }),
      },
      {
        field: "fields",
        sortable: false,
        headerName: t("fields"),
        editable: true,
        flex: 0.33,
        minWidth: 200,
        filterable: false,
        renderCell: (params) => <PermissionTableFieldCell {...params} />,
        renderEditCell: (params) => <TagCell {...params} />,
      },
      {
        field: "condition",
        sortable: false,
        headerName: t("condition"),
        flex: 0.33,
        minWidth: 200,
        editable: true,
        filterable: false,
        cellClassName: "wrap-text",
        renderEditCell: (params) => <MonacoEditorEditCell {...params} />,
      },
      {
        field: "reason",
        sortable: false,
        headerName: t("reason"),
        flex: 0.33,
        minWidth: 200,
        editable: true,
        filterable: false,
        cellClassName: "wrap-text",
      },
      {
        field: "actions",
        sortable: false,
        type: "actions",
        headerName: "Actions",
        width: 100,
        cellClassName: "actions",
        getActions: ({ id }) => {
          const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

          if (isInEditMode) {
            return [
              <GridActionsCellItem
                icon={<SaveIcon />}
                label="Save"
                sx={{
                  color: "primary.main",
                }}
                onClick={handleSaveClick(id)}
              />,
              <GridActionsCellItem
                icon={<CancelIcon />}
                label="Cancel"
                className="textPrimary"
                onClick={handleCancelClick(id)}
                color="inherit"
              />,
            ];
          }

          return [
            <GridActionsCellItem
              icon={<EditIcon />}
              label="Edit"
              className="textPrimary"
              onClick={handleEditClick(id)}
              color="inherit"
            />,
            <GridActionsCellItem
              icon={<DeleteIcon />}
              label="Delete"
              onClick={handleDeleteClick(id)}
              color="inherit"
            />,
          ];
        },
      },
    ],
    [
      t,
      rowModesModel,
      handleEditClick,
      handleSaveClick,
      handleDeleteClick,
      handleCancelClick,
      subjects,
    ]
  );
  return columns;
};
