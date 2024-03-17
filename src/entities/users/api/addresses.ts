import { emptySplitApi as api } from "../../../shared/api/emptyApi";
export const addTagTypes = ["addresses"] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      addressesControllerCreate: build.mutation<
        AddressesControllerCreateApiResponse,
        AddressesControllerCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/addresses`,
          method: "POST",
          body: queryArg.createAddressDto,
        }),
        invalidatesTags: ["addresses"],
      }),
      addressesControllerFindAll: build.query<
        AddressesControllerFindAllApiResponse,
        AddressesControllerFindAllApiArg
      >({
        query: (queryArg) => ({
          url: `/addresses`,
          params: { query: queryArg.query },
        }),
        providesTags: ["addresses"],
      }),
      addressesControllerFindOne: build.query<
        AddressesControllerFindOneApiResponse,
        AddressesControllerFindOneApiArg
      >({
        query: (queryArg) => ({ url: `/addresses/${queryArg.id}` }),
        providesTags: ["addresses"],
      }),
      addressesControllerUpdate: build.mutation<
        AddressesControllerUpdateApiResponse,
        AddressesControllerUpdateApiArg
      >({
        query: (queryArg) => ({
          url: `/addresses/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.updateAddressDto,
        }),
        invalidatesTags: ["addresses"],
      }),
      addressesControllerRemove: build.mutation<
        AddressesControllerRemoveApiResponse,
        AddressesControllerRemoveApiArg
      >({
        query: (queryArg) => ({
          url: `/addresses/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["addresses"],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as addressesApi };
export type AddressesControllerCreateApiResponse =
  /** status 201  */ AddressDto;
export type AddressesControllerCreateApiArg = {
  createAddressDto: CreateAddressDto;
};
export type AddressesControllerFindAllApiResponse =
  /** status 200  */ AddressDto[];
export type AddressesControllerFindAllApiArg = {
  query: string;
};
export type AddressesControllerFindOneApiResponse =
  /** status 200  */ AddressDto;
export type AddressesControllerFindOneApiArg = {
  id: number;
};
export type AddressesControllerUpdateApiResponse =
  /** status 200  */ AddressDto;
export type AddressesControllerUpdateApiArg = {
  id: number;
  updateAddressDto: UpdateAddressDto;
};
export type AddressesControllerRemoveApiResponse =
  /** status 200  */ AddressDto;
export type AddressesControllerRemoveApiArg = {
  id: number;
};
export type AddressDto = {
  id: number;
  clientId: number;
  index: number;
  city: string;
  district: string;
  street: string;
  building: string;
  createdAt: string;
  updatedAt: string;
};
export type CreateAddressDto = {
  clientId: number;
  index: number;
  city: string;
  district: string;
  street: string;
  building: string;
};
export type UpdateAddressDto = {
  clientId?: number;
  index?: number;
  city?: string;
  district?: string;
  street?: string;
  building?: string;
};
export const {
  useAddressesControllerCreateMutation,
  useAddressesControllerFindAllQuery,
  useLazyAddressesControllerFindAllQuery,
  useAddressesControllerFindOneQuery,
  useLazyAddressesControllerFindOneQuery,
  useAddressesControllerUpdateMutation,
  useAddressesControllerRemoveMutation,
} = injectedRtkApi;
