import { emptySplitApi as api } from "./emptyApi";
export const addTagTypes = ["pages"] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      pagesControllerCreate: build.mutation<
        PagesControllerCreateApiResponse,
        PagesControllerCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/pages`,
          method: "POST",
          body: queryArg.createPageDto,
        }),
        invalidatesTags: ["pages"],
      }),
      pagesControllerFindAll: build.query<
        PagesControllerFindAllApiResponse,
        PagesControllerFindAllApiArg
      >({
        query: (queryArg) => ({
          url: `/pages`,
          params: { query: queryArg.query },
        }),
        providesTags: ["pages"],
      }),
      pagesControllerFindOne: build.query<
        PagesControllerFindOneApiResponse,
        PagesControllerFindOneApiArg
      >({
        query: (queryArg) => ({ url: `/pages/${queryArg.id}` }),
        providesTags: ["pages"],
      }),
      pagesControllerUpdate: build.mutation<
        PagesControllerUpdateApiResponse,
        PagesControllerUpdateApiArg
      >({
        query: (queryArg) => ({
          url: `/pages/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.updatePageDto,
        }),
        invalidatesTags: ["pages"],
      }),
      pagesControllerRemove: build.mutation<
        PagesControllerRemoveApiResponse,
        PagesControllerRemoveApiArg
      >({
        query: (queryArg) => ({
          url: `/pages/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["pages"],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as pagesApi };
export type PagesControllerCreateApiResponse = /** status 201  */ PageDto;
export type PagesControllerCreateApiArg = {
  createPageDto: CreatePageDto;
};
export type PagesControllerFindAllApiResponse = /** status 200  */ PageDto[];
export type PagesControllerFindAllApiArg = {
  query?: string;
};
export type PagesControllerFindOneApiResponse = /** status 200  */ PageDto;
export type PagesControllerFindOneApiArg = {
  id: number;
};
export type PagesControllerUpdateApiResponse = /** status 200  */ PageDto;
export type PagesControllerUpdateApiArg = {
  id: number;
  updatePageDto: UpdatePageDto;
};
export type PagesControllerRemoveApiResponse = /** status 200  */ PageDto;
export type PagesControllerRemoveApiArg = {
  id: number;
};
export type PageDto = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};
export type CreatePageDto = {
  name: string;
};
export type UpdatePageDto = {
  name?: string;
};
export const {
  usePagesControllerCreateMutation,
  usePagesControllerFindAllQuery,
  useLazyPagesControllerFindAllQuery,
  usePagesControllerFindOneQuery,
  useLazyPagesControllerFindOneQuery,
  usePagesControllerUpdateMutation,
  usePagesControllerRemoveMutation,
} = injectedRtkApi;
