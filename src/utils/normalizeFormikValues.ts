/**
 * Normalizes formik values removing empty strings
 * @param values - formik values
 * @returns normalized formik values
 * @example
 * const values = {
 *  firstName: "John",
 *  lastName: "",
 *  patronymic: "Doe",
 * }
 * const normalizedValues = normalizeFormikValues(values);
 * console.log(normalizedValues);
 * // Output: { firstName: "John", patronymic: "Doe" }
 *
 */

export const normalizeFormikValues = <T extends Record<string, any>>(
  values: T
): T => {
  const result = {} as T;
  for (const key in values) {
    if (values[key] !== "") {
      result[key] = values[key];
    }
  }
  return result;
};
