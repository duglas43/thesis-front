import React, { FC } from "react";
import { TagsTable, TagsTableProps } from "@src/shared/ui";
import {
  useRolesControllerFindAllPaginatedQuery,
  useRolesControllerCreateMutation,
  useRolesControllerRemoveMutation,
} from "../../";

export interface RolesTableProps extends Partial<TagsTableProps> {}
export const RolesTable: FC<RolesTableProps> = (props) => {
  const [filters, setFilters] = React.useState({
    search: "",
    page: 0,
    limit: 50,
  });
  const [selectedIds, setSelectedIds] = React.useState<number[]>([]);
  const { data, isLoading } = useRolesControllerFindAllPaginatedQuery({
    query: filters.search,
    page: filters.page,
    limit: filters.limit,
  });
  const [createMutation, { isLoading: isCreatingRole }] =
    useRolesControllerCreateMutation();
  const [deleteMutation, { isLoading: isDeletingRole }] =
    useRolesControllerRemoveMutation();
  return (
    <TagsTable
      tags={data?.content || []}
      selectedIds={selectedIds}
      onTagSelectionChange={(ids) => setSelectedIds(ids)}
      onSearchTextChange={(text) => setFilters({ ...filters, search: text })}
      searchText={filters.search}
      onAddItem={() =>
        createMutation({
          createRoleDto: { name: "New role", description: "some" },
        })
      }
      onDeleteItem={(ids) => {
        ids.forEach((id) => {
          deleteMutation({ id });
        });
      }}
      onPageChange={(page) => setFilters({ ...filters, page })}
      onRowsPerPageChange={(limit) => setFilters({ ...filters, limit })}
      totalCount={data?.meta?.totalCount || 0}
      page={filters.page}
      pageCount={data?.meta?.pageCount || 1}
      rowsPerPage={filters.limit}
      {...props}
      loading={
        isLoading || isCreatingRole || isDeletingRole || !!props?.loading
      }
    />
  );
};
