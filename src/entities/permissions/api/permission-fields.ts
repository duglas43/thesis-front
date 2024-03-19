import { emptySplitApi as api } from "../../../shared/api/emptyApi";
export const addTagTypes = [] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({}),
    overrideExisting: false,
  });
export { injectedRtkApi as permissionFieldsApi };
export const {} = injectedRtkApi;
