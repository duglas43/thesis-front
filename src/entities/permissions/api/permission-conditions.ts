import { emptySplitApi as api } from "../../../shared/api/emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({}),
  overrideExisting: false,
});
export { injectedRtkApi as permissionConditionsApi };
export const {} = injectedRtkApi;