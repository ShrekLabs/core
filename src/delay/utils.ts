export const cancelDelay = Symbol("cancelDelay");

export type Cancellable = Promise<void> & {
  [cancelDelay]: () => void;
};

export function delay(ms: number): Cancellable {
  let timerId: number | undefined;

  const result = new Promise<void>((resolve) => {
    timerId = window.setTimeout(resolve, ms);
  }) as Cancellable;
  result[cancelDelay] = (): void => clearTimeout(timerId);

  return result;
}
