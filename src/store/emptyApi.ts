import { createApi } from "@reduxjs/toolkit/query/react";
import qs from "qs";
import { axiosBaseQuery } from "@src/axios";

export const emptySplitApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseQuery: "" }),

  endpoints: (builder) => ({}),
});
