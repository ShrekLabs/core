export const EMPTY_OBJECT = Object.freeze({}) as Record<string, undefined>;
export const EMPTY_ARRAY = Object.freeze([]);

export function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined && !Number.isNaN(value);
}

export function isEmpty<TValue>(value: TValue | null | undefined): value is undefined | null {
  return !notEmpty(value);
}

// eslint-disable-next-line
export function noop(..._args: any[]): any {}

// eslint-disable-next-line
export function sortNoop(..._args: any[]): number {
  return 0;
}

// eslint-disable-next-line
export async function asyncNoop(..._args: any[]): Promise<any> {}

export function getGlobalyUniqueId(prefix?: string): string {
  const stringPrefix = prefix ? `${prefix}-` : "";
  return `${stringPrefix}${Date.now()}${Math.random()}${Math.random()}`;
}

// Yes, I do know about https://github.com/blakeembrey/pluralize, but rule-based
// approach is a heavy alternative.
export function pluralize(word: string, count: number, wordPlural?: string): string {
  if (count === 1) {
    return `1 ${word}`;
  } else {
    return wordPlural ? `${count} ${wordPlural}` : `${count} ${word}s`;
  }
}

export function pluralizeWord(word: string, count: number, wordPlural?: string): string {
  if (count === 1) {
    return word;
  }

  return wordPlural || `${word}s`;
}

export function assertIsDefined<T>(value: T | undefined | null): asserts value is T {
  if (value === undefined || value === null) {
    const error = new Error(`Expected "val" to be defined, but received ${value}`);
    console.error("assert error", error);
    throw error;
  }
}

export function assertEachIsDefined<T>(values: (T | undefined | null)[] | undefined | null): asserts values is T[] {
  assertIsDefined(values);
  values.forEach(assertIsDefined);
}

export function logError(error: unknown, message?: string): void {
  if (message) {
    console.log(message, error);
  } else {
    console.log(error);
  }
}

export function logInfo(...params: unknown[]): void {
  console.info(...params);
}

export function mapToArray<T>(map: Record<string, T>): { key: string; value: T }[] {
  return Object.entries(map).map(([key, value]) => ({ key, value }));
}

export function arrayToMap<T>(array: { key: string; value: T }[]): Record<string, T> {
  const result: Record<string, T> = {};

  for (const pair of array) {
    if (!pair.key.trim()) continue;
    result[pair.key] = pair.value;
  }

  return result;
}
