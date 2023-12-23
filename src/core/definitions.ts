/**
 * Type of a class constructor
 * @category Core
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Constructor<T = object> = new (...a: any[]) => T;
