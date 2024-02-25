import React from "react";
import { GridColDef, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useTranslation } from "react-i18next";
import { UserDto } from "@src/store/users";
export interface useUsersTableColumnsProps {
  onDelete: (id: number) => any;
}
export const useUsersTableColumns = ({
  onDelete,
}: useUsersTableColumnsProps) => {
  const { t } = useTranslation();
  const columns = React.useMemo<GridColDef<UserDto>[]>(
    () => [
      {
        field: "email",
        headerName: t("email"),
        flex: 0.2,
        minWidth: 100,
        filterable: false,
      },
      {
        field: "firstName",
        headerName: t("firstName"),
        flex: 0.3,
        minWidth: 150,
        filterable: false,
      },
      {
        field: "lastName",
        headerName: t("lastName"),
        flex: 0.2,
        minWidth: 100,
        filterable: false,
      },
      {
        field: "patronymic",
        headerName: t("patronymic"),
        flex: 0.2,
        minWidth: 100,
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
  return columns;
};
