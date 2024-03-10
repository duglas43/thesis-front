import { ORDERS, TableState } from "@shared/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const tableState: TableState = {
  filters: {
    search: "",
    sortBy: "id",
    order: ORDERS.ASC,
    limit: 50,
    page: 1,
  },
  selectedIds: [],
  windows: {
    deleteWarning: false,
    history: false,
  },
};

const initialState: {
  [key: string]: TableState;
} = {};

const tablesSlice = createSlice({
  name: "tables",
  initialState,
  reducers: {
    createTableState: (
      state,
      action: PayloadAction<TableState & { tableName: string }>
    ) => {
      const { tableName, ...other } = action.payload;
      state[tableName] = other;
    },
    setTableFiltersField: (
      state: any,
      action: PayloadAction<{
        tableName: string;
        field: keyof TableState["filters"];
        value: any;
      }>
    ) => {
      const { tableName, field, value } = action.payload;
      state[tableName].filters[field] = value;
    },
    clearTableFilters: (
      state: any,
      action: PayloadAction<{
        tableName: string;
        additionalFilterOptions: string[];
      }>
    ) => {
      const { tableName, additionalFilterOptions } = action.payload;
      if (!state[tableName]) return;
      additionalFilterOptions.forEach((option) => {
        state[tableName].filters[option] = "";
      });
      Object.keys(state[tableName].filters).forEach((key) => {
        state[tableName].filters[key] = tableState.filters[key];
      });
    },

    setTableSelectedIds: (
      state: any,
      action: PayloadAction<{ tableName: string; ids: number[] }>
    ) => {
      const { tableName, ids } = action.payload;
      if (!state[tableName]) return;
      state[tableName].selectedIds = ids;
    },

    dynamicallySetTableFiltersFieldTags: (
      state,
      action: PayloadAction<{
        tableName: string;
        field: string;
        fieldTag: any;
      }>
    ) => {
      const { tableName, fieldTag, field } = action.payload;
      const tableItem = state[tableName] as any;
      if (!tableItem) return;
      if (!tableItem.filters[field]) tableItem.filters[field] = [];
      const index = tableItem.filters[field].findIndex(
        (item: any) => item.id === fieldTag.id
      );

      if (index !== -1 && tableItem.filters[field][index]?.state === false) {
        tableItem.filters[field][index] = {
          id: fieldTag.id,
          state: true,
        };
      } else if (
        index !== -1 &&
        tableItem.filters[field][index]?.state === true
      ) {
        tableItem.filters[field].splice(index, 1);
      } else {
        tableItem.filters[field].push({
          id: fieldTag.id,
          state: false,
        });
      }
    },
    setTableWindowsSearchTagsFiltersOpen: (
      state: any,
      action: PayloadAction<{ tableName: string; open: boolean }>
    ) => {
      const { tableName, open } = action.payload;
      if (!state[tableName]) return;
      state[tableName].windows.searchTagsFilters = open;
    },
    setTableWindowsSearchTagsEditOpen: (
      state: any,
      action: PayloadAction<{ tableName: string; open: boolean }>
    ) => {
      const { tableName, open } = action.payload;
      if (!state[tableName]) return;
      state[tableName].windows.searchTagsEdit = open;
    },
    setTableWindowsDeleteWarningOpen: (
      state: any,
      action: PayloadAction<{ tableName: string; open: boolean }>
    ) => {
      const { tableName, open } = action.payload;
      if (!state[tableName]) return;
      state[tableName].windows.deleteWarning = open;
    },
    setTableWindowsFilterBySearchTagsOpen: (
      state: any,
      action: PayloadAction<{ tableName: string; open: boolean }>
    ) => {
      const { tableName, open } = action.payload;
      if (!state[tableName]) return;
      state[tableName].windows.filterBySearchTags = open;
    },
    setTableSearchTagsDeleteWarningOpen: (
      state: any,
      action: PayloadAction<{ tableName: string; open: boolean }>
    ) => {
      const { tableName, open } = action.payload;
      if (!state[tableName]) return;
      state[tableName].windows.searchTagsDeleteWarning = open;
    },
    setTableWindowsHistoryOpen: (
      state: any,
      action: PayloadAction<{ tableName: string; open: boolean }>
    ) => {
      const { tableName, open } = action.payload;
      if (!state[tableName]) return;
      state[tableName].windows.history = open;
    },
  },
});

export const {
  createTableState,
  setTableFiltersField,
  setTableSelectedIds,
  setTableWindowsSearchTagsFiltersOpen,
  setTableWindowsSearchTagsEditOpen,
  setTableWindowsDeleteWarningOpen,
  setTableWindowsFilterBySearchTagsOpen,
  clearTableFilters,
  setTableSearchTagsDeleteWarningOpen,
  dynamicallySetTableFiltersFieldTags,
  setTableWindowsHistoryOpen,
} = tablesSlice.actions;
export const tablesReducer = tablesSlice.reducer;
