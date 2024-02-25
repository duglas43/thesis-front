import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    ordersControllerCreate: build.mutation<
      OrdersControllerCreateApiResponse,
      OrdersControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/orders`,
        method: "POST",
        body: queryArg.createOrderDto,
      }),
    }),
    ordersControllerFindAll: build.query<
      OrdersControllerFindAllApiResponse,
      OrdersControllerFindAllApiArg
    >({
      query: (queryArg) => ({
        url: `/orders`,
        params: { query: queryArg.query },
      }),
    }),
    ordersControllerFindOne: build.query<
      OrdersControllerFindOneApiResponse,
      OrdersControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/orders/${queryArg.id}` }),
    }),
    ordersControllerUpdate: build.mutation<
      OrdersControllerUpdateApiResponse,
      OrdersControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/orders/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updateOrderDto,
      }),
    }),
    ordersControllerRemove: build.mutation<
      OrdersControllerRemoveApiResponse,
      OrdersControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/orders/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    ordersControllerAddMachine: build.mutation<
      OrdersControllerAddMachineApiResponse,
      OrdersControllerAddMachineApiArg
    >({
      query: (queryArg) => ({
        url: `/orders/${queryArg.id}/machine`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    ordersControllerRemoveMachine: build.mutation<
      OrdersControllerRemoveMachineApiResponse,
      OrdersControllerRemoveMachineApiArg
    >({
      query: (queryArg) => ({
        url: `/orders/${queryArg.id}/machine/${queryArg.machineId}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as enhancedApi };
export type OrdersControllerCreateApiResponse = /** status 201  */ OrderDto;
export type OrdersControllerCreateApiArg = {
  createOrderDto: CreateOrderDto;
};
export type OrdersControllerFindAllApiResponse = /** status 200  */ OrderDto[];
export type OrdersControllerFindAllApiArg = {
  query: string;
};
export type OrdersControllerFindOneApiResponse = /** status 200  */ OrderDto;
export type OrdersControllerFindOneApiArg = {
  id: number;
};
export type OrdersControllerUpdateApiResponse = /** status 200  */ OrderDto;
export type OrdersControllerUpdateApiArg = {
  id: number;
  updateOrderDto: UpdateOrderDto;
};
export type OrdersControllerRemoveApiResponse = /** status 200  */ OrderDto;
export type OrdersControllerRemoveApiArg = {
  id: number;
};
export type OrdersControllerAddMachineApiResponse = /** status 200  */ void;
export type OrdersControllerAddMachineApiArg = {
  id: number;
  body: {
    machineId?: number;
    count?: number;
  };
};
export type OrdersControllerRemoveMachineApiResponse = /** status 200  */ void;
export type OrdersControllerRemoveMachineApiArg = {
  id: number;
  machineId: number;
};
export type OrderDto = {
  id: number;
  clientId: number;
  addressId: number;
  responsibleId: number;
  name: string;
  comment?: string;
  statusCode: number;
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
};
export type CreateOrderDto = {
  name: string;
  comment: string;
  statusCode: number;
  totalPrice: number;
  clientId: number;
  addressId: number;
  responsibleId: number;
};
export type UpdateOrderDto = {
  name?: string;
  comment?: string;
  statusCode?: number;
  totalPrice?: number;
  clientId?: number;
  addressId?: number;
  responsibleId?: number;
};
export const {
  useOrdersControllerCreateMutation,
  useOrdersControllerFindAllQuery,
  useLazyOrdersControllerFindAllQuery,
  useOrdersControllerFindOneQuery,
  useLazyOrdersControllerFindOneQuery,
  useOrdersControllerUpdateMutation,
  useOrdersControllerRemoveMutation,
  useOrdersControllerAddMachineMutation,
  useOrdersControllerRemoveMachineMutation,
} = injectedRtkApi;
