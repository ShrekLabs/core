/**
 * @category Delay
 */
export const cancelDelay = Symbol("cancelDelay");

/**
 * @category Delay
 */
export type Cancellable = Promise<void> & {
  [cancelDelay]: () => void;
};

/**
 * @category Delay
 */
export function delay(ms: number): Cancellable {
  let timerId: number | undefined;

  const result = new Promise<void>((resolve) => {
    timerId = window.setTimeout(resolve, ms);
  }) as Cancellable;
  result[cancelDelay] = (): void => clearTimeout(timerId);

  return result;
}
