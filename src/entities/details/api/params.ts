import { emptySplitApi as api } from "../../../shared/api/emptyApi";
export const addTagTypesParams = ["params"] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes: addTagTypesParams,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      paramsControllerCreate: build.mutation<
        ParamsControllerCreateApiResponse,
        ParamsControllerCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/params`,
          method: "POST",
          body: queryArg.createParamDto,
        }),
        invalidatesTags: ["params"],
      }),
      paramsControllerFindAll: build.query<
        ParamsControllerFindAllApiResponse,
        ParamsControllerFindAllApiArg
      >({
        query: (queryArg) => ({
          url: `/params`,
          params: { query: queryArg.query },
        }),
        providesTags: ["params"],
      }),
      paramsControllerFindOne: build.query<
        ParamsControllerFindOneApiResponse,
        ParamsControllerFindOneApiArg
      >({
        query: (queryArg) => ({ url: `/params/${queryArg.id}` }),
        providesTags: ["params"],
      }),
      paramsControllerUpdate: build.mutation<
        ParamsControllerUpdateApiResponse,
        ParamsControllerUpdateApiArg
      >({
        query: (queryArg) => ({
          url: `/params/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.updateParamDto,
        }),
        invalidatesTags: ["params"],
      }),
      paramsControllerRemove: build.mutation<
        ParamsControllerRemoveApiResponse,
        ParamsControllerRemoveApiArg
      >({
        query: (queryArg) => ({
          url: `/params/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["params"],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as paramsApi };
export type ParamsControllerCreateApiResponse = /** status 201  */ ParamDto;
export type ParamsControllerCreateApiArg = {
  createParamDto: CreateParamDto;
};
export type ParamsControllerFindAllApiResponse = /** status 200  */ ParamDto[];
export type ParamsControllerFindAllApiArg = {
  query: string;
};
export type ParamsControllerFindOneApiResponse = /** status 200  */ ParamDto;
export type ParamsControllerFindOneApiArg = {
  id: number;
};
export type ParamsControllerUpdateApiResponse = /** status 200  */ ParamDto;
export type ParamsControllerUpdateApiArg = {
  id: number;
  updateParamDto: UpdateParamDto;
};
export type ParamsControllerRemoveApiResponse = /** status 200  */ ParamDto;
export type ParamsControllerRemoveApiArg = {
  id: number;
};
export type ParamDto = {
  id: number;
  name: string;
  unit: string;
  type: string;
  createdAt: string;
  updatedAt: string;
};
export type CreateParamDto = {
  name: string;
  unit?: string;
  type?: string;
};
export type UpdateParamDto = {
  name?: string;
  unit?: string;
  type?: string;
};
export const {
  useParamsControllerCreateMutation,
  useParamsControllerFindAllQuery,
  useLazyParamsControllerFindAllQuery,
  useParamsControllerFindOneQuery,
  useLazyParamsControllerFindOneQuery,
  useParamsControllerUpdateMutation,
  useParamsControllerRemoveMutation,
} = injectedRtkApi;
