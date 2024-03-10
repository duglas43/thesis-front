import { emptySplitApi as api } from "../../../shared/api/emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    authControllerSignUp: build.mutation<
      AuthControllerSignUpApiResponse,
      AuthControllerSignUpApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/signup`,
        method: "POST",
        body: queryArg.signUpDto,
      }),
    }),
    authControllerSignIn: build.mutation<
      AuthControllerSignInApiResponse,
      AuthControllerSignInApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/signin`,
        method: "POST",
        body: queryArg.signInDto,
      }),
    }),
    authControllerRefresh: build.mutation<
      AuthControllerRefreshApiResponse,
      AuthControllerRefreshApiArg
    >({
      query: () => ({ url: `/auth/refresh`, method: "POST" }),
    }),
    authControllerLogout: build.mutation<
      AuthControllerLogoutApiResponse,
      AuthControllerLogoutApiArg
    >({
      query: () => ({ url: `/auth/logout`, method: "POST" }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as authApi };
export type AuthControllerSignUpApiResponse = /** status 201  */ AccessDto;
export type AuthControllerSignUpApiArg = {
  signUpDto: SignUpDto;
};
export type AuthControllerSignInApiResponse = /** status 201  */ AccessDto;
export type AuthControllerSignInApiArg = {
  signInDto: SignInDto;
};
export type AuthControllerRefreshApiResponse = /** status 201  */ AccessDto;
export type AuthControllerRefreshApiArg = void;
export type AuthControllerLogoutApiResponse = /** status 201  */ AccessDto;
export type AuthControllerLogoutApiArg = void;
export type AccessDto = {
  access_token: string;
};
export type SignUpDto = {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  patronymic?: string;
};
export type SignInDto = {
  email: string;
  password: string;
};
export const {
  useAuthControllerSignUpMutation,
  useAuthControllerSignInMutation,
  useAuthControllerRefreshMutation,
  useAuthControllerLogoutMutation,
} = injectedRtkApi;
