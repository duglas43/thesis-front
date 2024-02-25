export { ORDER } from "./order.enum";
export { LANGUAGES } from "./languages.enum";
export { ROLES } from "./roles.enum";
export { ROLES_IDS } from "./roles-ids.enum";
export const getNumericEnumValues = (enumObj: any): number[] => {
  const values = Object.values(enumObj);
  return values.filter((value) => typeof value === "number") as number[];
};
export const getNumericEnumKeys = (enumObject: Record<string, number>) => {
  return Object.keys(enumObject).filter((key) => isNaN(Number(key)));
};
