import { ORDERS } from "./index";

export interface TableFilters {
  search: string;
  sortBy: string;
  order: ORDERS;
  limit: number;
  page: number;
  [key: string]: any | undefined;
}
export interface TableWindows {
  deleteWarning: boolean;
  history: boolean;
}
export interface TableState {
  filters: TableFilters;
  selectedIds: number[];
  windows: TableWindows;
}
