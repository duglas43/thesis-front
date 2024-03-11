import React, { FC } from "react";
import {
  ORDER,
  useMachinesControllerFindAllQuery,
  useMachinesControllerCreateMutation,
  useMachinesControllerRemoveMutation,
} from "@entities/machines";
import { useUsersControllerFindMeQuery } from "@entities/users";
import {
  DataGrid,
  DataGridProps,
  GridSortModel,
  GridPaginationModel,
  GridFilterModel,
} from "@mui/x-data-grid";
import { getLocalizationLocaleText } from "@shared/ui";
import { useMachinesTableColumns } from "./columns";
import { MachineTableToolbar } from "./Toolbar";

export const MachinesTable: FC<Partial<DataGridProps>> = (props) => {
  const { data: me } = useUsersControllerFindMeQuery();
  const [createdMachine, { isLoading: isCreating }] =
    useMachinesControllerCreateMutation();
  const [deletedMachine, { isLoading: isDeleting }] =
    useMachinesControllerRemoveMutation();
  const columns = useMachinesTableColumns({
    onDelete: (id: number) => {
      deletedMachine({ id });
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
    createdMachine({
      createMachineDto: {
        name: `changeMe${Date.now()}`,
        partNumber: "changeMe",
      },
    });
  };

  const { data, isLoading } = useMachinesControllerFindAllQuery({
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
          toolbar: MachineTableToolbar,
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
