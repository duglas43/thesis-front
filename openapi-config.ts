import type { ConfigFile } from "@rtk-query/codegen-openapi";
import { resolve } from "path";

const config: ConfigFile = {
  schemaFile: resolve(__dirname, "open-api-docs.json"),
  apiFile: "./src/store/emptyApi.ts",
  apiImport: "emptySplitApi",
  outputFiles: {
    "./src/store/auth.ts": {
      filterEndpoints: [/auth/i],
    },
    "./src/store/users.ts": {
      filterEndpoints: [/users/i],
    },
    "./src/store/roles.ts": {
      filterEndpoints: [/roles/i],
    },
    "./src/store/details.ts": {
      filterEndpoints: [/details/i],
    },
    "./src/store/machines.ts": {
      filterEndpoints: [/machines/i],
    },
    "./src/store/params.ts": {
      filterEndpoints: [/params/i],
    },
    "./src/store/addresses.ts": {
      filterEndpoints: [/addresses/i],
    },
    "./src/store/orders.ts": {
      filterEndpoints: [/orders/i],
    },
    "./src/store/permission-fields.ts": {
      filterEndpoints: [/permission-fields/i],
    },
    "./src/store/permission-conditions.ts": {
      filterEndpoints: [/permission-conditions/i],
    },
    "./src/store/permission.ts": {
      filterEndpoints: [/permission/i],
    },
    "./src/store/subjects.ts": {
      filterEndpoints: [/subjects/i],
    },
  },
  hooks: {
    lazyQueries: true,
    mutations: true,
    queries: true,
  },
};

export default config;
