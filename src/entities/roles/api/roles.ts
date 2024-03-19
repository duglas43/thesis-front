import { emptySplitApi as api } from "../../../shared/api/emptyApi";
export const addTagTypes = ["users", "roles"] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      usersControllerFindRoles: build.query<
        UsersControllerFindRolesApiResponse,
        UsersControllerFindRolesApiArg
      >({
        query: (queryArg) => ({ url: `/users/${queryArg.id}/roles` }),
        providesTags: ["users"],
      }),
      usersControllerAddRoles: build.mutation<
        UsersControllerAddRolesApiResponse,
        UsersControllerAddRolesApiArg
      >({
        query: (queryArg) => ({
          url: `/users/${queryArg.id}/roles`,
          method: "POST",
          body: queryArg.body,
        }),
        invalidatesTags: ["users"],
      }),
      usersControllerRemoveRoles: build.mutation<
        UsersControllerRemoveRolesApiResponse,
        UsersControllerRemoveRolesApiArg
      >({
        query: (queryArg) => ({
          url: `/users/${queryArg.id}/roles`,
          method: "DELETE",
          body: queryArg.body,
        }),
        invalidatesTags: ["users"],
      }),
      rolesControllerCreate: build.mutation<
        RolesControllerCreateApiResponse,
        RolesControllerCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/roles`,
          method: "POST",
          body: queryArg.createRoleDto,
        }),
        invalidatesTags: ["roles"],
      }),
      rolesControllerFindAll: build.query<
        RolesControllerFindAllApiResponse,
        RolesControllerFindAllApiArg
      >({
        query: (queryArg) => ({
          url: `/roles`,
          params: {
            query: queryArg.query,
            sort: queryArg.sort,
            order: queryArg.order,
            limit: queryArg.limit,
            page: queryArg.page,
          },
        }),
        providesTags: ["roles"],
      }),
      rolesControllerFindAllPaginated: build.query<
        RolesControllerFindAllPaginatedApiResponse,
        RolesControllerFindAllPaginatedApiArg
      >({
        query: (queryArg) => ({
          url: `/roles/paginated`,
          params: {
            query: queryArg.query,
            sort: queryArg.sort,
            order: queryArg.order,
            limit: queryArg.limit,
            page: queryArg.page,
          },
        }),
        providesTags: ["roles"],
      }),
      rolesControllerFindOne: build.query<
        RolesControllerFindOneApiResponse,
        RolesControllerFindOneApiArg
      >({
        query: (queryArg) => ({ url: `/roles/${queryArg.id}` }),
        providesTags: ["roles"],
      }),
      rolesControllerUpdate: build.mutation<
        RolesControllerUpdateApiResponse,
        RolesControllerUpdateApiArg
      >({
        query: (queryArg) => ({
          url: `/roles/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.updateRoleDto,
        }),
        invalidatesTags: ["roles"],
      }),
      rolesControllerRemove: build.mutation<
        RolesControllerRemoveApiResponse,
        RolesControllerRemoveApiArg
      >({
        query: (queryArg) => ({
          url: `/roles/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["roles"],
      }),
      rolesControllerFindPermissions: build.query<
        RolesControllerFindPermissionsApiResponse,
        RolesControllerFindPermissionsApiArg
      >({
        query: (queryArg) => ({ url: `/roles/${queryArg.id}/permissions` }),
        providesTags: ["roles"],
      }),
      rolesControllerAddPermissions: build.mutation<
        RolesControllerAddPermissionsApiResponse,
        RolesControllerAddPermissionsApiArg
      >({
        query: (queryArg) => ({
          url: `/roles/${queryArg.id}/permissions`,
          method: "POST",
          body: queryArg.body,
        }),
        invalidatesTags: ["roles"],
      }),
      rolesControllerRemovePermissions: build.mutation<
        RolesControllerRemovePermissionsApiResponse,
        RolesControllerRemovePermissionsApiArg
      >({
        query: (queryArg) => ({
          url: `/roles/${queryArg.id}/permissions`,
          method: "DELETE",
          body: queryArg.body,
        }),
        invalidatesTags: ["roles"],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as rolesApi };
export type UsersControllerFindRolesApiResponse = /** status 200  */ RoleDto[];
export type UsersControllerFindRolesApiArg = {
  id: number;
};
export type UsersControllerAddRolesApiResponse = /** status 200  */ UserDto;
export type UsersControllerAddRolesApiArg = {
  id: number;
  body: {
    roleIds?: number[];
  };
};
export type UsersControllerRemoveRolesApiResponse = /** status 200  */ UserDto;
export type UsersControllerRemoveRolesApiArg = {
  id: number;
  body: {
    roleIds?: number[];
  };
};
export type RolesControllerCreateApiResponse = /** status 201  */ RoleDto;
export type RolesControllerCreateApiArg = {
  createRoleDto: CreateRoleDto;
};
export type RolesControllerFindAllApiResponse = /** status 200  */ RoleDto[];
export type RolesControllerFindAllApiArg = {
  query: string;
  sort?: string;
  order?: ORDER;
  limit?: number;
  page?: number;
};
export type RolesControllerFindAllPaginatedApiResponse = /** status 200  */ {
  content?: RoleDto[];
  meta?: MetaDto;
};
export type RolesControllerFindAllPaginatedApiArg = {
  query: string;
  sort?: string;
  order?: ORDER;
  limit?: number;
  page?: number;
};
export type RolesControllerFindOneApiResponse = /** status 200  */ RoleDto;
export type RolesControllerFindOneApiArg = {
  id: number;
};
export type RolesControllerUpdateApiResponse = /** status 200  */ RoleDto;
export type RolesControllerUpdateApiArg = {
  id: number;
  updateRoleDto: UpdateRoleDto;
};
export type RolesControllerRemoveApiResponse = /** status 200  */ RoleDto;
export type RolesControllerRemoveApiArg = {
  id: number;
};
export type RolesControllerFindPermissionsApiResponse =
  /** status 200  */ PermissionDto[];
export type RolesControllerFindPermissionsApiArg = {
  id: number;
};
export type RolesControllerAddPermissionsApiResponse =
  /** status 200  */ PermissionDto[];
export type RolesControllerAddPermissionsApiArg = {
  id: number;
  body: {
    permissionsId?: number[];
  };
};
export type RolesControllerRemovePermissionsApiResponse =
  /** status 200  */ PermissionDto[];
export type RolesControllerRemovePermissionsApiArg = {
  id: number;
  body: {
    permissionsId?: number[];
  };
};
export type RoleDto = {
  id: number;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
};
export type UserDto = {
  id: number;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  patronymic?: string | null;
  language: LANGUAGES;
  createdAt: string;
  updatedAt: string;
};
export type CreateRoleDto = {
  name: string;
  description?: string;
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
export type UpdateRoleDto = {
  name?: string;
  description?: string;
};
export type PermissionFieldDto = {
  id: string;
  permissionId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};
export type PermissionDto = {
  id: string;
  subjectId: string;
  modality: boolean;
  action: ACTIONS;
  fields: PermissionFieldDto[];
  condition: string;
  reason: string | null;
  createdAt: string;
  updatedAt: string | null;
};
export enum LANGUAGES {
  En = "en",
  It = "it",
  De = "de",
  Fr = "fr",
  Es = "es",
  Tr = "tr",
  Nl = "nl",
}
export enum ORDER {
  Asc = "ASC",
  Desc = "DESC",
}
export enum ACTIONS {
  Manage = "manage",
  Create = "create",
  Read = "read",
  Update = "update",
  Delete = "delete",
}
export const {
  useUsersControllerFindRolesQuery,
  useLazyUsersControllerFindRolesQuery,
  useUsersControllerAddRolesMutation,
  useUsersControllerRemoveRolesMutation,
  useRolesControllerCreateMutation,
  useRolesControllerFindAllQuery,
  useLazyRolesControllerFindAllQuery,
  useRolesControllerFindAllPaginatedQuery,
  useLazyRolesControllerFindAllPaginatedQuery,
  useRolesControllerFindOneQuery,
  useLazyRolesControllerFindOneQuery,
  useRolesControllerUpdateMutation,
  useRolesControllerRemoveMutation,
  useRolesControllerFindPermissionsQuery,
  useLazyRolesControllerFindPermissionsQuery,
  useRolesControllerAddPermissionsMutation,
  useRolesControllerRemovePermissionsMutation,
} = injectedRtkApi;
