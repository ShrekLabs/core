// Pretty prints a number (e.g. `prettyNumber(123456789) = "123,456,789"`)
export function prettyNumber(n: number): string {
  return n.toLocaleString();
}

export function progressToPercents(progress: number): number {
  return Math.floor(progress * 100);
}
