import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile: "http://localhost:5000/api/docs.json",
  apiFile: "./src/shared/api/emptyApi.ts",
  apiImport: "emptySplitApi",
  useEnumType: true,
  tag: true,
  hooks: {
    lazyQueries: true,
    mutations: true,
    queries: true,
  },
  outputFiles: {
    "./src/entities/auth/api/auth.ts": {
      filterEndpoints: [/auth/i],
      exportName: "authApi",
    },
    "./src/entities/users/api/users.ts": {
      filterEndpoints: [/users/i],
      exportName: "usersApi",
    },
    "./src/entities/roles/api/roles.ts": {
      filterEndpoints: [/roles/i],
      exportName: "rolesApi",
    },
    "./src/entities/details/api/details.ts": {
      filterEndpoints: [/details/i],
      exportName: "detailsApi",
    },
    "./src/entities/machines/api/machines.ts": {
      filterEndpoints: [/machines/i],
      exportName: "machinesApi",
    },
    "./src/entities/details/api/params.ts": {
      filterEndpoints: [/params/i],
      exportName: "paramsApi",
    },
    "./src/entities/users/api/addresses.ts": {
      filterEndpoints: [/addresses/i],
      exportName: "addressesApi",
    },
    "./src/entities/orders/api/orders.ts": {
      filterEndpoints: [/orders/i],
      exportName: "ordersApi",
    },
    "./src/entities/permissions/api/permission-fields.ts": {
      filterEndpoints: [/permission-fields/i],
      exportName: "permissionFieldsApi",
    },
    "./src/entities/permissions/api/permission-conditions.ts": {
      filterEndpoints: [/permission-conditions/i],
      exportName: "permissionConditionsApi",
    },
    "./src/entities/permissions/api/permissions.ts": {
      filterEndpoints: [/permission/i],
      exportName: "permissionApi",
    },
    "./src/shared/api/subjects.ts": {
      filterEndpoints: [/subjects/i],
      exportName: "subjectsApi",
    },
    "./src/shared/api/pages.ts": {
      filterEndpoints: [/pages/i],
      exportName: "pagesApi",
    },
  },
};

export default config;
