import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
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
    }),
    addressesControllerFindAll: build.query<
      AddressesControllerFindAllApiResponse,
      AddressesControllerFindAllApiArg
    >({
      query: (queryArg) => ({
        url: `/addresses`,
        params: { query: queryArg.query },
      }),
    }),
    addressesControllerFindOne: build.query<
      AddressesControllerFindOneApiResponse,
      AddressesControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/addresses/${queryArg.id}` }),
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
    }),
    addressesControllerRemove: build.mutation<
      AddressesControllerRemoveApiResponse,
      AddressesControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/addresses/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as enhancedApi };
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
