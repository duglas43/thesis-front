import React from "react";
import {
  GridColDef,
  GridActionsCellItem,
  GridRowId,
  GridRowModesModel,
  GridRowModes,
  GridPreProcessEditCellProps,
} from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import { useTranslation } from "react-i18next";
import { SubjectDto } from "@src/shared/api";
import { PermissionDto, ACTIONS } from "@entities/permissions";
import DeleteIcon from "@mui/icons-material/Delete";
import { ErrorableCell, TagCell } from "@src/shared/ui";
import * as yup from "yup";
import { PermissionTableFieldCell } from "./FieldCell";

// const handleEditClick = (id: GridRowId) => () => {
//   setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
// };

// const handleSaveClick = (id: GridRowId) => () => {
//   setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
// };

// const handleDeleteClick = (id: GridRowId) => () => {
//   setRows(rows.filter((row) => row.id !== id));
// };
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
        flex: 0.2,
        minWidth: 100,
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
        flex: 0.3,
        minWidth: 150,
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
        flex: 0.2,
        editable: true,
        minWidth: 100,
        filterable: false,
        valueGetter: (params) => params.row.subjectId || "",
      },
      {
        field: "fields",
        sortable: false,
        headerName: t("fields"),
        editable: true,
        flex: 0.2,
        minWidth: 100,
        filterable: false,
        renderCell: (params) => <PermissionTableFieldCell {...params} />,
        renderEditCell: (params) => <TagCell {...params} />,
      },
      {
        field: "conditions",
        sortable: false,
        headerName: t("conditions"),
        flex: 0.2,
        minWidth: 100,
        filterable: false,
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
