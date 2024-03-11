import { emptySplitApi as api } from "../../../shared/api/emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    detailsControllerCreate: build.mutation<
      DetailsControllerCreateApiResponse,
      DetailsControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/details`,
        method: "POST",
        body: queryArg.createDetailDto,
      }),
    }),
    detailsControllerFindAll: build.query<
      DetailsControllerFindAllApiResponse,
      DetailsControllerFindAllApiArg
    >({
      query: (queryArg) => ({
        url: `/details`,
        params: {
          query: queryArg.query,
          sort: queryArg.sort,
          order: queryArg.order,
          limit: queryArg.limit,
          page: queryArg.page,
        },
      }),
    }),
    detailsControllerFindOne: build.query<
      DetailsControllerFindOneApiResponse,
      DetailsControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/details/${queryArg.id}` }),
    }),
    detailsControllerUpdate: build.mutation<
      DetailsControllerUpdateApiResponse,
      DetailsControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/details/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updateDetailDto,
      }),
    }),
    detailsControllerRemove: build.mutation<
      DetailsControllerRemoveApiResponse,
      DetailsControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/details/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    detailsControllerAddParam: build.mutation<
      DetailsControllerAddParamApiResponse,
      DetailsControllerAddParamApiArg
    >({
      query: (queryArg) => ({
        url: `/details/${queryArg.id}/param`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    detailsControllerRemoveParam: build.mutation<
      DetailsControllerRemoveParamApiResponse,
      DetailsControllerRemoveParamApiArg
    >({
      query: (queryArg) => ({
        url: `/details/${queryArg.id}/param/${queryArg.paramId}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as detailsApi };
export type DetailsControllerCreateApiResponse = /** status 201  */ DetailDto;
export type DetailsControllerCreateApiArg = {
  createDetailDto: CreateDetailDto;
};
export type DetailsControllerFindAllApiResponse = /** status 200  */ {
  content?: DetailDto[];
  meta?: MetaDto;
};
export type DetailsControllerFindAllApiArg = {
  query: string;
  sort?: string;
  order?: ORDER;
  limit?: number;
  page?: number;
};
export type DetailsControllerFindOneApiResponse = /** status 200  */ DetailDto;
export type DetailsControllerFindOneApiArg = {
  id: number;
};
export type DetailsControllerUpdateApiResponse = /** status 200  */ DetailDto;
export type DetailsControllerUpdateApiArg = {
  id: number;
  updateDetailDto: UpdateDetailDto;
};
export type DetailsControllerRemoveApiResponse = /** status 200  */ DetailDto;
export type DetailsControllerRemoveApiArg = {
  id: number;
};
export type DetailsControllerAddParamApiResponse = /** status 200  */ void;
export type DetailsControllerAddParamApiArg = {
  id: number;
  body: {
    paramId?: number;
    value?: string;
  };
};
export type DetailsControllerRemoveParamApiResponse = /** status 200  */ void;
export type DetailsControllerRemoveParamApiArg = {
  id: number;
  paramId: number;
};
export type DetailDto = {
  id: number;
  name: string;
  partNumber: string;
  createdAt: string;
  updatedAt: string;
};
export type CreateDetailDto = {
  name: string;
  partNumber?: string;
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
export type UpdateDetailDto = {
  name?: string;
  partNumber?: string;
};
export enum ORDER {
  Asc = "ASC",
  Desc = "DESC",
}
export const {
  useDetailsControllerCreateMutation,
  useDetailsControllerFindAllQuery,
  useLazyDetailsControllerFindAllQuery,
  useDetailsControllerFindOneQuery,
  useLazyDetailsControllerFindOneQuery,
  useDetailsControllerUpdateMutation,
  useDetailsControllerRemoveMutation,
  useDetailsControllerAddParamMutation,
  useDetailsControllerRemoveParamMutation,
} = injectedRtkApi;
