import React, { useContext } from "react";
import { GridColDef, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useTranslation } from "react-i18next";
import { MachineDto } from "@entities/machines";
import { AbilityContext } from "@src/entities/casl";
import { SUBJECTS, ACTIONS } from "@src/shared/types";

export interface useDetailsTableColumnsProps {
  onDelete: (id: number) => any;
}
export const useDetailsTableColumns = ({
  onDelete,
}: useDetailsTableColumnsProps) => {
  const { t } = useTranslation();
  const ability = useContext(AbilityContext);
  const columns = React.useMemo<GridColDef<MachineDto>[]>(
    () => [
      {
        field: "name",
        headerName: t("name"),
        flex: 0.2,
        minWidth: 100,
        filterable: false,
      },
      {
        field: "partNumber",
        headerName: t("partNumber"),
        flex: 0.3,
        minWidth: 150,
        filterable: false,
      },
      {
        field: "createdAt",
        headerName: t("createdAt"),
        flex: 0.2,
        minWidth: 100,
        valueFormatter: (params) => new Date(params.value).toLocaleDateString(),
        filterable: false,
      },
      {
        field: "actions",
        type: "actions",
        minWidth: 50,
        headerName: t("actions"),
        flex: 0.1,
        getActions: ({ row }) => [
          <GridActionsCellItem
            icon={<DeleteOutlineIcon />}
            label="Delete"
            sx={{
              color: "primary.main",
            }}
            onClick={() => {
              onDelete(row.id);
            }}
          />,
        ],
      },
    ],
    [onDelete, t]
  );
  return columns.filter((column) => {
    if (column.field === "actions") {
      return ability.can(ACTIONS.DELETE, SUBJECTS.DETAIL);
    }
    return ability.can(ACTIONS.READ, SUBJECTS.DETAIL, column.field);
  });
};
