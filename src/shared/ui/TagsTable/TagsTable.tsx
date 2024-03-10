import React, { FC } from "react";
import TagsTableSearchBar from "./SearchBar/SearchBar";
import TagsTableToolbar from "./Toolbar/Toolbar";
import TagsTableList from "./List/List";
import TagsTableFooter from "./Footer/Footer";
import { ORDERS } from "@shared/types";
import { LibSearchProps } from "@shared/ui";
import { SxProps } from "@mui/material";
import { TagsTableListProps } from "./List/List";
import { BoxProps, Box } from "@mui/material";

export interface Tag {
  id: string;
  name: string;
  description: string;
  [key: string]: any;
}
export interface TagsTableFilters {
  name: string;
  description: string;
  sortBy: string;
  order: ORDERS;
}
export enum TAGS_TABLE_FILTER_TYPES {
  NAME = "name",
  DESCRIPTION = "description",
  SORT_BY = "sortBy",
  ORDER = "order",
  INCLUDE_MODE = "includeMode",
}
export interface TagsTableProps extends BoxProps {
  tags: Extendable<Tag>[];
  selectedIds: number[];
  tagListSx?: SxProps;
  onTagSelectionChange: (ids: number[], details?: Extendable<Tag>[]) => void;
  onSearchTextChange: (value: string) => void;
  searchText: string;
  loading: boolean;
  onAddItem: () => void;
  onDeleteItem: (ids: number[]) => void;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (rowsPerPage: number) => void;
  totalCount: number;
  page: number;
  pageCount: number;
  rowsPerPage: number;
  hideToolbar?: boolean;
  searchProps?: LibSearchProps;
  listProps?: Partial<TagsTableListProps>;
}
const TagsTable: FC<TagsTableProps> = ({
  tags,
  selectedIds,
  onTagSelectionChange,
  onSearchTextChange,
  searchText,
  loading,
  onAddItem,
  onDeleteItem,
  onPageChange,
  onRowsPerPageChange,
  totalCount,
  page,
  pageCount,
  rowsPerPage,
  tagListSx,
  hideToolbar,
  searchProps,
  listProps,
  ...props
}) => {
  const handleTagClick = (id: number, tag: Extendable<Tag>) => {
    onTagSelectionChange([id], [tag]);
  };
  const deleteEnabled =
    tags.filter((tag) => selectedIds.includes(tag.id)) &&
    selectedIds.length > 0;
  return (
    <Box {...props}>
      <TagsTableSearchBar
        searchProps={searchProps}
        searchText={searchText}
        onSearchTextChange={onSearchTextChange}
      />
      {hideToolbar || (
        <TagsTableToolbar
          onAddButtonClick={onAddItem}
          onDeleteButtonClick={() => onDeleteItem(selectedIds)}
          deleteButtonEnabled={deleteEnabled}
        />
      )}
      <TagsTableList
        tags={tags}
        loading={loading}
        selectedIds={selectedIds}
        onTagClick={handleTagClick}
        sx={tagListSx}
        {...listProps}
      />
      <TagsTableFooter
        totalCount={totalCount}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={onPageChange}
        pageCount={pageCount}
        onRowsPerPageChange={onRowsPerPageChange}
      />
    </Box>
  );
};

export default React.memo(TagsTable);
