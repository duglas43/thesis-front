type anyStringObject = { [key: string]: any | undefined };
type Extendable<T> = T | anyStringObject;
type WithRequiredProperty<Type, Key extends keyof Type> = Type & {
  [Property in Key]-?: Type[Property];
};
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
type PickAllExcept<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type PartialExcept<T, K extends keyof T> = {
  [P in keyof T]?: P extends K ? T[P] : T[P] | undefined;
};

type ValueOf<T> = T[keyof T];
type ListResponse<T> = {
  count: number;
  totalPage: number;
  editAllowed: boolean;
  data: T[];
};

type ItemResponse<T> = T & {
  editAllowed: boolean;
};
