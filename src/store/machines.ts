import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
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
    }),
    machinesControllerFindAll: build.query<
      MachinesControllerFindAllApiResponse,
      MachinesControllerFindAllApiArg
    >({
      query: (queryArg) => ({
        url: `/machines`,
        params: { query: queryArg.query },
      }),
    }),
    machinesControllerFindOne: build.query<
      MachinesControllerFindOneApiResponse,
      MachinesControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/machines/${queryArg.id}` }),
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
    }),
    machinesControllerRemove: build.mutation<
      MachinesControllerRemoveApiResponse,
      MachinesControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/machines/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as enhancedApi };
export type MachinesControllerCreateApiResponse = /** status 201  */ MachineDto;
export type MachinesControllerCreateApiArg = {
  createMachineDto: CreateMachineDto;
};
export type MachinesControllerFindAllApiResponse =
  /** status 200  */ MachineDto[];
export type MachinesControllerFindAllApiArg = {
  query: string;
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
  createdAt: string;
  updatedAt: string;
};
export type CreateMachineDto = {
  name: string;
  partNumber?: string;
};
export type UpdateMachineDto = {
  name?: string;
  partNumber?: string;
};
export const {
  useMachinesControllerCreateMutation,
  useMachinesControllerFindAllQuery,
  useLazyMachinesControllerFindAllQuery,
  useMachinesControllerFindOneQuery,
  useLazyMachinesControllerFindOneQuery,
  useMachinesControllerUpdateMutation,
  useMachinesControllerRemoveMutation,
} = injectedRtkApi;
