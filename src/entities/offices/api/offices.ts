import { emptySplitApi as api } from "../../../shared/api/emptyApi";
export const addTagTypes = ["offices"] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      officesControllerCreate: build.mutation<
        OfficesControllerCreateApiResponse,
        OfficesControllerCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/offices`,
          method: "POST",
          body: queryArg.createOfficeDto,
        }),
        invalidatesTags: ["offices"],
      }),
      officesControllerFindAll: build.query<
        OfficesControllerFindAllApiResponse,
        OfficesControllerFindAllApiArg
      >({
        query: (queryArg) => ({
          url: `/offices`,
          params: { query: queryArg.query },
        }),
        providesTags: ["offices"],
      }),
      officesControllerFindOne: build.query<
        OfficesControllerFindOneApiResponse,
        OfficesControllerFindOneApiArg
      >({
        query: (queryArg) => ({ url: `/offices/${queryArg.id}` }),
        providesTags: ["offices"],
      }),
      officesControllerUpdate: build.mutation<
        OfficesControllerUpdateApiResponse,
        OfficesControllerUpdateApiArg
      >({
        query: (queryArg) => ({
          url: `/offices/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.updateOfficeDto,
        }),
        invalidatesTags: ["offices"],
      }),
      officesControllerRemove: build.mutation<
        OfficesControllerRemoveApiResponse,
        OfficesControllerRemoveApiArg
      >({
        query: (queryArg) => ({
          url: `/offices/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["offices"],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as officesApi };
export type OfficesControllerCreateApiResponse = /** status 201  */ OfficeDto;
export type OfficesControllerCreateApiArg = {
  createOfficeDto: CreateOfficeDto;
};
export type OfficesControllerFindAllApiResponse =
  /** status 200  */ OfficeDto[];
export type OfficesControllerFindAllApiArg = {
  query?: string;
};
export type OfficesControllerFindOneApiResponse = /** status 200  */ OfficeDto;
export type OfficesControllerFindOneApiArg = {
  id: number;
};
export type OfficesControllerUpdateApiResponse = /** status 200  */ OfficeDto;
export type OfficesControllerUpdateApiArg = {
  id: number;
  updateOfficeDto: UpdateOfficeDto;
};
export type OfficesControllerRemoveApiResponse = /** status 200  */ OfficeDto;
export type OfficesControllerRemoveApiArg = {
  id: number;
};
export type OfficeDto = {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};
export type CreateOfficeDto = {
  name: string;
};
export type UpdateOfficeDto = {
  name?: string;
};
export const {
  useOfficesControllerCreateMutation,
  useOfficesControllerFindAllQuery,
  useLazyOfficesControllerFindAllQuery,
  useOfficesControllerFindOneQuery,
  useLazyOfficesControllerFindOneQuery,
  useOfficesControllerUpdateMutation,
  useOfficesControllerRemoveMutation,
} = injectedRtkApi;
