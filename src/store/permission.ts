import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
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
    permissionFieldsControllerCreate: build.mutation<
      PermissionFieldsControllerCreateApiResponse,
      PermissionFieldsControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/permission-fields`,
        method: "POST",
        body: queryArg.createPermissionFieldDto,
      }),
    }),
    permissionFieldsControllerFindAll: build.query<
      PermissionFieldsControllerFindAllApiResponse,
      PermissionFieldsControllerFindAllApiArg
    >({
      query: () => ({ url: `/permission-fields` }),
    }),
    permissionFieldsControllerFindOne: build.query<
      PermissionFieldsControllerFindOneApiResponse,
      PermissionFieldsControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/permission-fields/${queryArg.id}` }),
    }),
    permissionFieldsControllerUpdate: build.mutation<
      PermissionFieldsControllerUpdateApiResponse,
      PermissionFieldsControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/permission-fields/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updatePermissionFieldDto,
      }),
    }),
    permissionFieldsControllerRemove: build.mutation<
      PermissionFieldsControllerRemoveApiResponse,
      PermissionFieldsControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/permission-fields/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    permissionConditionsControllerCreate: build.mutation<
      PermissionConditionsControllerCreateApiResponse,
      PermissionConditionsControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/permission-conditions`,
        method: "POST",
        body: queryArg.createPermissionConditionDto,
      }),
    }),
    permissionConditionsControllerFindAll: build.query<
      PermissionConditionsControllerFindAllApiResponse,
      PermissionConditionsControllerFindAllApiArg
    >({
      query: () => ({ url: `/permission-conditions` }),
    }),
    permissionConditionsControllerFindOne: build.query<
      PermissionConditionsControllerFindOneApiResponse,
      PermissionConditionsControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/permission-conditions/${queryArg.id}` }),
    }),
    permissionConditionsControllerUpdate: build.mutation<
      PermissionConditionsControllerUpdateApiResponse,
      PermissionConditionsControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/permission-conditions/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updatePermissionConditionDto,
      }),
    }),
    permissionConditionsControllerRemove: build.mutation<
      PermissionConditionsControllerRemoveApiResponse,
      PermissionConditionsControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/permission-conditions/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    permissionsControllerCreate: build.mutation<
      PermissionsControllerCreateApiResponse,
      PermissionsControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/permission`,
        method: "POST",
        body: queryArg.createPermissionDto,
      }),
    }),
    permissionsControllerFindAll: build.query<
      PermissionsControllerFindAllApiResponse,
      PermissionsControllerFindAllApiArg
    >({
      query: () => ({ url: `/permission` }),
    }),
    permissionsControllerFindOne: build.query<
      PermissionsControllerFindOneApiResponse,
      PermissionsControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/permission/${queryArg.id}` }),
    }),
    permissionsControllerUpdate: build.mutation<
      PermissionsControllerUpdateApiResponse,
      PermissionsControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/permission/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updatePermissionDto,
      }),
    }),
    permissionsControllerRemove: build.mutation<
      PermissionsControllerRemoveApiResponse,
      PermissionsControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/permission/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as enhancedApi };
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
export type PermissionFieldsControllerCreateApiResponse =
  /** status 201  */ PermissionFieldDto;
export type PermissionFieldsControllerCreateApiArg = {
  createPermissionFieldDto: CreatePermissionFieldDto;
};
export type PermissionFieldsControllerFindAllApiResponse =
  /** status 200  */ PermissionFieldDto[];
export type PermissionFieldsControllerFindAllApiArg = void;
export type PermissionFieldsControllerFindOneApiResponse =
  /** status 200  */ PermissionFieldDto;
export type PermissionFieldsControllerFindOneApiArg = {
  id: number;
};
export type PermissionFieldsControllerUpdateApiResponse =
  /** status 200  */ PermissionFieldDto;
export type PermissionFieldsControllerUpdateApiArg = {
  id: number;
  updatePermissionFieldDto: UpdatePermissionFieldDto;
};
export type PermissionFieldsControllerRemoveApiResponse =
  /** status 200  */ PermissionFieldDto;
export type PermissionFieldsControllerRemoveApiArg = {
  id: number;
};
export type PermissionConditionsControllerCreateApiResponse =
  /** status 201  */ PermissionConditionDto;
export type PermissionConditionsControllerCreateApiArg = {
  createPermissionConditionDto: CreatePermissionConditionDto;
};
export type PermissionConditionsControllerFindAllApiResponse =
  /** status 200  */ PermissionConditionDto[];
export type PermissionConditionsControllerFindAllApiArg = void;
export type PermissionConditionsControllerFindOneApiResponse =
  /** status 200  */ PermissionConditionDto;
export type PermissionConditionsControllerFindOneApiArg = {
  id: number;
};
export type PermissionConditionsControllerUpdateApiResponse =
  /** status 200  */ PermissionConditionDto;
export type PermissionConditionsControllerUpdateApiArg = {
  id: number;
  updatePermissionConditionDto: UpdatePermissionConditionDto;
};
export type PermissionConditionsControllerRemoveApiResponse =
  /** status 200  */ PermissionConditionDto;
export type PermissionConditionsControllerRemoveApiArg = {
  id: number;
};
export type PermissionsControllerCreateApiResponse =
  /** status 201  */ PermissionDto;
export type PermissionsControllerCreateApiArg = {
  createPermissionDto: CreatePermissionDto;
};
export type PermissionsControllerFindAllApiResponse =
  /** status 200  */ PermissionDto[];
export type PermissionsControllerFindAllApiArg = void;
export type PermissionsControllerFindOneApiResponse =
  /** status 200  */ PermissionDto;
export type PermissionsControllerFindOneApiArg = {
  id: number;
};
export type PermissionsControllerUpdateApiResponse =
  /** status 200  */ PermissionDto;
export type PermissionsControllerUpdateApiArg = {
  id: number;
  updatePermissionDto: UpdatePermissionDto;
};
export type PermissionsControllerRemoveApiResponse =
  /** status 200  */ PermissionDto;
export type PermissionsControllerRemoveApiArg = {
  id: number;
};
export type Actions = "manage" | "create" | "read" | "update" | "delete";
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
  action: Actions;
  fields: PermissionFieldDto[];
  conditions: PermissionConditionDto[];
  reason: string | null;
  createdAt: string;
  updatedAt: string | null;
};
export type CreatePermissionFieldDto = {
  permissionId: number;
  name: string;
};
export type UpdatePermissionFieldDto = {
  permissionId: number;
  name: string;
};
export type CreatePermissionConditionDto = {
  permissionId: number;
  key: string;
  value: string;
};
export type UpdatePermissionConditionDto = {
  permissionId: number;
  key: string;
  value: string;
};
export type PermissionField = {
  name: string;
};
export type PermissionCondition = {
  key: string;
  value: string;
};
export type CreatePermissionDto = {
  subjectId: number;
  modality?: boolean;
  fields?: PermissionField[];
  conditions?: PermissionCondition[];
  reason?: string;
  action: Actions;
};
export type UpdatePermissionDto = {
  subjectId: number;
  modality: boolean;
  action: string;
};
export const {
  useUsersControllerFindPermissionsQuery,
  useLazyUsersControllerFindPermissionsQuery,
  useUsersControllerAddPermissionsMutation,
  useUsersControllerRemovePermissionsMutation,
  useRolesControllerFindPermissionsQuery,
  useLazyRolesControllerFindPermissionsQuery,
  useRolesControllerAddPermissionsMutation,
  useRolesControllerRemovePermissionsMutation,
  usePermissionFieldsControllerCreateMutation,
  usePermissionFieldsControllerFindAllQuery,
  useLazyPermissionFieldsControllerFindAllQuery,
  usePermissionFieldsControllerFindOneQuery,
  useLazyPermissionFieldsControllerFindOneQuery,
  usePermissionFieldsControllerUpdateMutation,
  usePermissionFieldsControllerRemoveMutation,
  usePermissionConditionsControllerCreateMutation,
  usePermissionConditionsControllerFindAllQuery,
  useLazyPermissionConditionsControllerFindAllQuery,
  usePermissionConditionsControllerFindOneQuery,
  useLazyPermissionConditionsControllerFindOneQuery,
  usePermissionConditionsControllerUpdateMutation,
  usePermissionConditionsControllerRemoveMutation,
  usePermissionsControllerCreateMutation,
  usePermissionsControllerFindAllQuery,
  useLazyPermissionsControllerFindAllQuery,
  usePermissionsControllerFindOneQuery,
  useLazyPermissionsControllerFindOneQuery,
  usePermissionsControllerUpdateMutation,
  usePermissionsControllerRemoveMutation,
} = injectedRtkApi;
