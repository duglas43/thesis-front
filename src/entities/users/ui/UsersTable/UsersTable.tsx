import React, { FC } from "react";
import { ORDER } from "@entities/users";
import {
  useUsersControllerFindAllQuery,
  useUsersControllerCreateMutation,
  useUsersControllerRemoveMutation,
  useUsersControllerFindMeQuery,
} from "@entities/users";
import {
  DataGrid,
  DataGridProps,
  GridSortModel,
  GridPaginationModel,
  GridFilterModel,
} from "@mui/x-data-grid";
import { getLocalizationLocaleText } from "@shared/ui";
import { UsersTableToolbar } from "./Toolbar";
import { useUsersTableColumns } from "./columns";

export const UsersTable: FC<Partial<DataGridProps>> = (props) => {
  const { data: me } = useUsersControllerFindMeQuery();
  const [createUser, { isLoading: isCreating }] =
    useUsersControllerCreateMutation();
  const [deleteUser, { isLoading: isDeleting }] =
    useUsersControllerRemoveMutation();
  const columns = useUsersTableColumns({
    onDelete: (id) => {
      deleteUser({ id });
    },
  });

  const [sortModel, setSortModel] = React.useState<GridSortModel>([
    {
      field: "id",
      sort: "asc",
    },
  ]);
  const onSortModelChange = (newModel: GridSortModel) => {
    setSortModel(newModel);
  };

  const [paginationModel, setPaginationModel] =
    React.useState<GridPaginationModel>({
      page: 0,
      pageSize: 20,
    });

  const [filterModel, setFilterModel] = React.useState<GridFilterModel>({
    items: [],
    quickFilterValues: [""],
  });
  const onQuickFilterChange = (filterModel: GridFilterModel) => {
    setFilterModel(filterModel);
  };

  const handleAddRecord = () => {
    createUser({
      createUserDto: {
        email: `changeMe${Date.now()}`,
        password: "changeMe",
      },
    });
  };

  const { data, isLoading } = useUsersControllerFindAllQuery({
    query: filterModel?.quickFilterValues?.[0] || "",
    sort: sortModel[0]?.field || "id",
    order: (sortModel[0]?.sort?.toUpperCase() as ORDER) || "ASC",
    page: paginationModel.page,
    limit: paginationModel.pageSize,
  });

  return (
    <>
      <DataGrid
        columns={columns}
        rows={data?.content || []}
        loading={isLoading || isCreating || isDeleting || props.loading}
        sortModel={sortModel}
        onSortModelChange={onSortModelChange}
        pagination
        paginationModel={paginationModel}
        pageSizeOptions={[20, 50, 100]}
        paginationMode="server"
        onPaginationModelChange={setPaginationModel}
        slots={{
          toolbar: UsersTableToolbar,
          ...props.slots,
        }}
        slotProps={{
          toolbar: {
            onAddRecord: handleAddRecord,
            ...props.slotProps?.toolbar,
          },
          ...props.slotProps,
        }}
        filterMode="server"
        rowCount={data?.meta?.totalCount || 0}
        filterModel={filterModel}
        onFilterModelChange={onQuickFilterChange}
        localeText={me ? getLocalizationLocaleText(me.language) : undefined}
        {...props}
      />
    </>
  );
};
