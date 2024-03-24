import { emptySplitApi as api } from "../../../shared/api/emptyApi";
export const addTagTypes = ["machines"] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      machinesControllerCreate: build.mutation<
        MachinesControllerCreateApiResponse,
        MachinesControllerCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/machines`,
          method: "POST",
          body: queryArg.createMachineDto,
        }),
        invalidatesTags: ["machines"],
      }),
      machinesControllerFindAll: build.query<
        MachinesControllerFindAllApiResponse,
        MachinesControllerFindAllApiArg
      >({
        query: (queryArg) => ({
          url: `/machines`,
          params: {
            query: queryArg.query,
            sort: queryArg.sort,
            order: queryArg.order,
            limit: queryArg.limit,
            page: queryArg.page,
          },
        }),
        providesTags: ["machines"],
      }),
      machinesControllerFindOne: build.query<
        MachinesControllerFindOneApiResponse,
        MachinesControllerFindOneApiArg
      >({
        query: (queryArg) => ({ url: `/machines/${queryArg.id}` }),
        providesTags: ["machines"],
      }),
      machinesControllerUpdate: build.mutation<
        MachinesControllerUpdateApiResponse,
        MachinesControllerUpdateApiArg
      >({
        query: (queryArg) => ({
          url: `/machines/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.updateMachineDto,
        }),
        invalidatesTags: ["machines"],
      }),
      machinesControllerRemove: build.mutation<
        MachinesControllerRemoveApiResponse,
        MachinesControllerRemoveApiArg
      >({
        query: (queryArg) => ({
          url: `/machines/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["machines"],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as machinesApi };
export type MachinesControllerCreateApiResponse = /** status 201  */ MachineDto;
export type MachinesControllerCreateApiArg = {
  createMachineDto: CreateMachineDto;
};
export type MachinesControllerFindAllApiResponse = /** status 200  */ {
  content?: MachineDto[];
  meta?: MetaDto;
};
export type MachinesControllerFindAllApiArg = {
  query: string;
  sort?: string;
  order?: ORDER;
  limit?: number;
  page?: number;
};
export type MachinesControllerFindOneApiResponse =
  /** status 200  */ MachineDto;
export type MachinesControllerFindOneApiArg = {
  id: number;
};
export type MachinesControllerUpdateApiResponse = /** status 200  */ MachineDto;
export type MachinesControllerUpdateApiArg = {
  id: number;
  updateMachineDto: UpdateMachineDto;
};
export type MachinesControllerRemoveApiResponse = /** status 200  */ MachineDto;
export type MachinesControllerRemoveApiArg = {
  id: number;
};
export type MachineDto = {
  id: number;
  name: string;
  partNumber: string;
  price: number | null;
  createdAt: string;
  updatedAt: string;
};
export type CreateMachineDto = {
  name: string;
  partNumber?: string;
  price?: number;
};
export type MetaDto = {
  totalCount: number;
  pageCount: number;
  resultCount: number;
  page: number;
  limit: number;
  order: ORDER;
  sort: string;
};
export type UpdateMachineDto = {
  name?: string;
  partNumber?: string;
  price?: number;
};
export enum ORDER {
  Asc = "ASC",
  Desc = "DESC",
}
export const {
  useMachinesControllerCreateMutation,
  useMachinesControllerFindAllQuery,
  useLazyMachinesControllerFindAllQuery,
  useMachinesControllerFindOneQuery,
  useLazyMachinesControllerFindOneQuery,
  useMachinesControllerUpdateMutation,
  useMachinesControllerRemoveMutation,
} = injectedRtkApi;
