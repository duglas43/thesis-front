import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
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
    rolesControllerCreate: build.mutation<
      RolesControllerCreateApiResponse,
      RolesControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/roles`,
        method: "POST",
        body: queryArg.createRoleDto,
      }),
    }),
    rolesControllerFindAll: build.query<
      RolesControllerFindAllApiResponse,
      RolesControllerFindAllApiArg
    >({
      query: (queryArg) => ({
        url: `/roles`,
        params: { query: queryArg.query },
      }),
    }),
    rolesControllerFindOne: build.query<
      RolesControllerFindOneApiResponse,
      RolesControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/roles/${queryArg.id}` }),
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
    }),
    rolesControllerRemove: build.mutation<
      RolesControllerRemoveApiResponse,
      RolesControllerRemoveApiArg
    >({
      query: (queryArg) => ({ url: `/roles/${queryArg.id}`, method: "DELETE" }),
    }),
    rolesControllerFindPermissions: build.query<
      RolesControllerFindPermissionsApiResponse,
      RolesControllerFindPermissionsApiArg
    >({
      query: (queryArg) => ({ url: `/roles/${queryArg.id}/permissions` }),
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
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as enhancedApi };
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
  login: string;
  firstName?: string | null;
  lastName?: string | null;
  patronymic?: string | null;
  language: "en" | "it" | "de" | "fr" | "es" | "tr" | "nl";
  email?: string | null;
  lastVisit?: boolean;
  createdAt: string;
  updatedAt: string;
};
export type CreateRoleDto = {
  name: string;
  description?: string;
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
  action: "manage" | "create" | "read" | "update" | "delete";
  fields: PermissionFieldDto[];
  conditions: PermissionConditionDto[];
  reason: string | null;
  createdAt: string;
  updatedAt: string | null;
};
export const {
  useUsersControllerFindRolesQuery,
  useLazyUsersControllerFindRolesQuery,
  useUsersControllerAddRolesMutation,
  useUsersControllerRemoveRolesMutation,
  useRolesControllerCreateMutation,
  useRolesControllerFindAllQuery,
  useLazyRolesControllerFindAllQuery,
  useRolesControllerFindOneQuery,
  useLazyRolesControllerFindOneQuery,
  useRolesControllerUpdateMutation,
  useRolesControllerRemoveMutation,
  useRolesControllerFindPermissionsQuery,
  useLazyRolesControllerFindPermissionsQuery,
  useRolesControllerAddPermissionsMutation,
  useRolesControllerRemovePermissionsMutation,
} = injectedRtkApi;
