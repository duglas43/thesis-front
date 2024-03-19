import { emptySplitApi as api } from "../../../shared/api/emptyApi";
export const addTagTypes = [
  "users",
  "roles",
  "permission-fields",
  "permission",
] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      usersControllerFindPermissions: build.query<
        UsersControllerFindPermissionsApiResponse,
        UsersControllerFindPermissionsApiArg
      >({
        query: (queryArg) => ({ url: `/users/${queryArg.id}/permissions` }),
        providesTags: ["users"],
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
        invalidatesTags: ["users"],
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
        invalidatesTags: ["users"],
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
      permissionFieldsControllerCreate: build.mutation<
        PermissionFieldsControllerCreateApiResponse,
        PermissionFieldsControllerCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/permission-fields`,
          method: "POST",
          body: queryArg.createPermissionFieldDto,
        }),
        invalidatesTags: ["permission-fields"],
      }),
      permissionFieldsControllerFindAll: build.query<
        PermissionFieldsControllerFindAllApiResponse,
        PermissionFieldsControllerFindAllApiArg
      >({
        query: () => ({ url: `/permission-fields` }),
        providesTags: ["permission-fields"],
      }),
      permissionFieldsControllerFindOne: build.query<
        PermissionFieldsControllerFindOneApiResponse,
        PermissionFieldsControllerFindOneApiArg
      >({
        query: (queryArg) => ({ url: `/permission-fields/${queryArg.id}` }),
        providesTags: ["permission-fields"],
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
        invalidatesTags: ["permission-fields"],
      }),
      permissionFieldsControllerRemove: build.mutation<
        PermissionFieldsControllerRemoveApiResponse,
        PermissionFieldsControllerRemoveApiArg
      >({
        query: (queryArg) => ({
          url: `/permission-fields/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["permission-fields"],
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
        invalidatesTags: ["permission"],
      }),
      permissionsControllerFindAll: build.query<
        PermissionsControllerFindAllApiResponse,
        PermissionsControllerFindAllApiArg
      >({
        query: () => ({ url: `/permission` }),
        providesTags: ["permission"],
      }),
      permissionsControllerFindOne: build.query<
        PermissionsControllerFindOneApiResponse,
        PermissionsControllerFindOneApiArg
      >({
        query: (queryArg) => ({ url: `/permission/${queryArg.id}` }),
        providesTags: ["permission"],
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
        invalidatesTags: ["permission"],
      }),
      permissionsControllerRemove: build.mutation<
        PermissionsControllerRemoveApiResponse,
        PermissionsControllerRemoveApiArg
      >({
        query: (queryArg) => ({
          url: `/permission/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["permission"],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as permissionApi };
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
export type CreatePermissionFieldDto = {
  permissionId: number;
  name: string;
};
export type UpdatePermissionFieldDto = {
  permissionId: number;
  name: string;
};
export type PermissionField = {
  name: string;
};
export type CreatePermissionDto = {
  subjectId: number;
  modality?: boolean;
  fields?: PermissionField[];
  condition?: string;
  reason?: string;
  action: ACTIONS;
};
export type UpdatePermissionDto = {
  subjectId?: number;
  modality?: boolean;
  action?: ACTIONS;
  reason?: string;
  condition?: string;
};
export enum ACTIONS {
  Manage = "manage",
  Create = "create",
  Read = "read",
  Update = "update",
  Delete = "delete",
}
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
  usePermissionsControllerCreateMutation,
  usePermissionsControllerFindAllQuery,
  useLazyPermissionsControllerFindAllQuery,
  usePermissionsControllerFindOneQuery,
  useLazyPermissionsControllerFindOneQuery,
  usePermissionsControllerUpdateMutation,
  usePermissionsControllerRemoveMutation,
} = injectedRtkApi;
