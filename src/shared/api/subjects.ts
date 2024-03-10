import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    subjectsControllerFindAll: build.query<
      SubjectsControllerFindAllApiResponse,
      SubjectsControllerFindAllApiArg
    >({
      query: () => ({ url: `/subjects` }),
    }),
    subjectsControllerFindOne: build.query<
      SubjectsControllerFindOneApiResponse,
      SubjectsControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/subjects/${queryArg.id}` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as subjectsApi };
export type SubjectsControllerFindAllApiResponse =
  /** status 200  */ SubjectDto[];
export type SubjectsControllerFindAllApiArg = void;
export type SubjectsControllerFindOneApiResponse =
  /** status 200  */ SubjectDto;
export type SubjectsControllerFindOneApiArg = {
  id: number;
};
export type SubjectDto = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};
export const {
  useSubjectsControllerFindAllQuery,
  useLazySubjectsControllerFindAllQuery,
  useSubjectsControllerFindOneQuery,
  useLazySubjectsControllerFindOneQuery,
} = injectedRtkApi;
