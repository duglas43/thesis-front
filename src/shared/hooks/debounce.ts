import { useEffect, useState } from "react";
import debounce from "lodash/debounce";

/**
 * Custom debounce hook based on Lodash's debounce function.
 * @param callback - The function to be debounced.
 * @param delay - The debounce delay in milliseconds.
 * @returns A debounced version of the callback function.
 */
export function useDebounce<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): T {
  const [debouncedFn, setDebouncedFn] = useState<ReturnType<
    typeof debounce
  > | null>(() => debounce(callback, delay));

  useEffect(() => {
    setDebouncedFn(() => debounce(callback, delay));
  }, [callback, delay]);

  useEffect(() => {
    return () => {
      if (debouncedFn) {
        debouncedFn.cancel();
      }
    };
  }, [debouncedFn]);

  return callback as T; // Type assertion
}
