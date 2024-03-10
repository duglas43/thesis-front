import { emptySplitApi as api } from "../../../shared/api/emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    usersControllerCreate: build.mutation<
      UsersControllerCreateApiResponse,
      UsersControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/users`,
        method: "POST",
        body: queryArg.createUserDto,
      }),
    }),
    usersControllerFindAll: build.query<
      UsersControllerFindAllApiResponse,
      UsersControllerFindAllApiArg
    >({
      query: (queryArg) => ({
        url: `/users`,
        params: {
          query: queryArg.query,
          sort: queryArg.sort,
          order: queryArg.order,
          limit: queryArg.limit,
          page: queryArg.page,
        },
      }),
    }),
    usersControllerFindMe: build.query<
      UsersControllerFindMeApiResponse,
      UsersControllerFindMeApiArg
    >({
      query: () => ({ url: `/users/me` }),
    }),
    usersControllerFindOne: build.query<
      UsersControllerFindOneApiResponse,
      UsersControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/users/${queryArg.id}` }),
    }),
    usersControllerUpdate: build.mutation<
      UsersControllerUpdateApiResponse,
      UsersControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updateUserDto,
      }),
    }),
    usersControllerRemove: build.mutation<
      UsersControllerRemoveApiResponse,
      UsersControllerRemoveApiArg
    >({
      query: (queryArg) => ({ url: `/users/${queryArg.id}`, method: "DELETE" }),
    }),
    usersControllerFindRoles: build.query<
      UsersControllerFindRolesApiResponse,
      UsersControllerFindRolesApiArg
    >({
      query: (queryArg) => ({ url: `/users/${queryArg.id}/roles` }),
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
    }),
    usersControllerFindPermissions: build.query<
      UsersControllerFindPermissionsApiResponse,
      UsersControllerFindPermissionsApiArg
    >({
      query: (queryArg) => ({ url: `/users/${queryArg.id}/permissions` }),
    }),
    usersControllerAddPermissions: build.mutation<
      UsersControllerAddPermissionsApiResponse,
      UsersControllerAddPermissionsApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.id}/permissions`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    usersControllerRemovePermissions: build.mutation<
      UsersControllerRemovePermissionsApiResponse,
      UsersControllerRemovePermissionsApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.id}/permissions`,
        method: "DELETE",
        body: queryArg.body,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as usersApi };
export type UsersControllerCreateApiResponse = /** status 201  */ UserDto;
export type UsersControllerCreateApiArg = {
  createUserDto: CreateUserDto;
};
export type UsersControllerFindAllApiResponse = /** status 200  */ {
  content?: UserDto[];
  meta?: MetaDto;
};
export type UsersControllerFindAllApiArg = {
  query: string;
  sort?: string;
  order?: ORDER;
  limit?: number;
  page?: number;
};
export type UsersControllerFindMeApiResponse = /** status 200  */ UserDto;
export type UsersControllerFindMeApiArg = void;
export type UsersControllerFindOneApiResponse = /** status 200  */ UserDto;
export type UsersControllerFindOneApiArg = {
  id: number;
};
export type UsersControllerUpdateApiResponse = /** status 200  */ UserDto;
export type UsersControllerUpdateApiArg = {
  id: number;
  updateUserDto: UpdateUserDto;
};
export type UsersControllerRemoveApiResponse = /** status 200  */ UserDto;
export type UsersControllerRemoveApiArg = {
  id: number;
};
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
export type UsersControllerFindPermissionsApiResponse =
  /** status 200  */ PermissionDto[];
export type UsersControllerFindPermissionsApiArg = {
  id: number;
};
export type UsersControllerAddPermissionsApiResponse =
  /** status 201  */ PermissionDto[];
export type UsersControllerAddPermissionsApiArg = {
  id: number;
  body: {
    permissionIds?: number[];
  };
};
export type UsersControllerRemovePermissionsApiResponse =
  /** status 200  */ PermissionDto[];
export type UsersControllerRemovePermissionsApiArg = {
  id: number;
  body: {
    permissionIds?: number[];
  };
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
export type CreateUserDto = {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  patronymic?: string;
  language?: LANGUAGES;
  roleIds?: string[];
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
export type UpdateUserDto = {
  email?: string;
  firstName?: string;
  lastName?: string;
  patronymic?: string;
  language?: LANGUAGES;
  roleIds?: string[];
};
export type RoleDto = {
  id: number;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
};
export type PermissionFieldDto = {
  id: string;
  permissionId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};
export type PermissionConditionDto = {
  id: string;
  permissionId: string;
  key: string;
  value: string;
  createdAt: string;
  updatedAt: string;
};
export type PermissionDto = {
  id: string;
  subjectId: string;
  modality: boolean;
  action: ACTIONS;
  fields: PermissionFieldDto[];
  conditions: PermissionConditionDto[];
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
  useUsersControllerCreateMutation,
  useUsersControllerFindAllQuery,
  useLazyUsersControllerFindAllQuery,
  useUsersControllerFindMeQuery,
  useLazyUsersControllerFindMeQuery,
  useUsersControllerFindOneQuery,
  useLazyUsersControllerFindOneQuery,
  useUsersControllerUpdateMutation,
  useUsersControllerRemoveMutation,
  useUsersControllerFindRolesQuery,
  useLazyUsersControllerFindRolesQuery,
  useUsersControllerAddRolesMutation,
  useUsersControllerRemoveRolesMutation,
  useUsersControllerFindPermissionsQuery,
  useLazyUsersControllerFindPermissionsQuery,
  useUsersControllerAddPermissionsMutation,
  useUsersControllerRemovePermissionsMutation,
} = injectedRtkApi;
