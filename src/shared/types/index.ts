export const getNumericEnumValues = (enumObj: any): number[] => {
  const values = Object.values(enumObj);
  return values.filter((value) => typeof value === "number") as number[];
};
export const getNumericEnumKeys = (enumObject: Record<string, number>) => {
  return Object.keys(enumObject).filter((key) => isNaN(Number(key)));
};
export * from "./orders.enum";
export * from "./table";
