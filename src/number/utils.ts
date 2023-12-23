/**
 * @category Number
 * @example
 * prettyNumber(123456789) = "123,456,789"
 */
export function prettyNumber(n: number): string {
  return n.toLocaleString();
}

/**
 * Turns progress (0 to 1) into percents (0 to 100).
 * @category Number
 * @example
 * progressToPercents(0.13) = 13
 */
export function progressToPercents(progress: number): number {
  return Math.floor(progress * 100);
}
