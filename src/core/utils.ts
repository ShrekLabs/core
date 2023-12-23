/**
 * Simply a `{}`
 * @category Core
 */
export const EMPTY_OBJECT = Object.freeze({}) as Record<string, undefined>;

/**
 * Simply a `[]`
 * @category Core
 */
export const EMPTY_ARRAY = Object.freeze([]);

/**
 * Returns true if the value is not empty.
 * @category Core
 * @example
 * notEmpty(42) === true
 * notEmpty(0) === true
 * notEmpty(undefined) === false
 * notEmpty(null) === false
 * notEmpty(NaN) === false
 */
export function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined && !Number.isNaN(value);
}

/**
 * Returns true if the value is empty.
 * @category Core
 * @example
 * isEmpty(42) === false
 * isEmpty(0) === false
 * isEmpty(undefined) === true
 * isEmpty(null) === true
 * isEmpty(NaN) === true
 */
export function isEmpty<TValue>(value: TValue | null | undefined): value is undefined | null {
  return !notEmpty(value);
}

/**
 * Does nothing. It ss used for defaults and types primarily.
 * @category Core
 */
// eslint-disable-next-line
export function noop(..._args: any[]): any {}

/**
 * Used for `@gravity-ui` tables' sort property.
 * @category Core
 */
// eslint-disable-next-line
export function sortNoop(..._args: any[]): number {
  return 0;
}

/**
 * @category Core
 */
// eslint-disable-next-line
export async function asyncNoop(..._args: any[]): Promise<any> {}

/**
 * @category Core
 */
export function getGlobalyUniqueId(prefix?: string): string {
  const stringPrefix = prefix ? `${prefix}-` : "";
  return `${stringPrefix}${Date.now()}${Math.random()}${Math.random()}`;
}

/**
 * A lightweight alternative to https://github.com/blakeembrey/pluralize
 * @category Core
 */
export function pluralize(word: string, count: number, wordPlural?: string): string {
  if (count === 1) {
    return `1 ${word}`;
  } else {
    return wordPlural ? `${count} ${wordPlural}` : `${count} ${word}s`;
  }
}

/**
 * A lightweight alternative to https://github.com/blakeembrey/pluralize
 * @category Core
 */
export function pluralizeWord(word: string, count: number, wordPlural?: string): string {
  if (count === 1) {
    return word;
  }

  return wordPlural || `${word}s`;
}

/**
 * Throws an error if the value is undefined or null
 * @category Core
 */
export function assertIsDefined<T>(value: T | undefined | null): asserts value is T {
  if (value === undefined || value === null) {
    const error = new Error(`Expected "val" to be defined, but received ${value}`);
    console.error("assert error", error);
    throw error;
  }
}

/**
 * Calls `assertIsDefined` for each item of the array or throws an error if the array is null/undefined
 * @category Core
 */
export function assertEachIsDefined<T>(values: (T | undefined | null)[] | undefined | null): asserts values is T[] {
  assertIsDefined(values);
  values.forEach(assertIsDefined);
}

/**
 * Basically a console.error
 * @category Core
 */
export function logError(error: unknown, message?: string): void {
  if (message) {
    console.error(message, error);
  } else {
    console.error(error);
  }
}

/**
 * Basically a console.log
 * @category Core
 */
export function logInfo(...params: unknown[]): void {
  console.info(...params);
}

/**
 * A map (`{}`) to an array (`[]`)
 * @category Core
 */
export function mapToArray<T>(map: Record<string, T>): { key: string; value: T }[] {
  return Object.entries(map).map(([key, value]) => ({ key, value }));
}

/**
 * An array (`[]`) to a map (`{}`)
 * @category Core
 */
export function arrayToMap<T>(array: { key: string; value: T }[]): Record<string, T> {
  const result: Record<string, T> = {};

  for (const pair of array) {
    if (!pair.key.trim()) continue;
    result[pair.key] = pair.value;
  }

  return result;
}
