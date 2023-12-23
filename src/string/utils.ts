/**
 * Makes the first symbol uppercase and leaves the rest unchanged.
 * @category String
 * @example
 * capitalize("what is love?") === "What is love?"
 * capitalize("") === ""
 * capitalize("SHREK") === "SHREK"
 */
export function capitalize(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Turns a `string` into a `number` if it's a valid number, returns `undefined` otherwise;
 * @category String
 * @example
 * stringToNumberOrUndefined("618") === 618
 * stringToNumberOrUndefined("3.14") === 3.14
 * stringToNumberOrUndefined("SHREK") === undefined
 */
export function stringToNumberOrUndefined(str: string): number | undefined {
  const trimmed = str.trim();
  if (!trimmed) return undefined;

  const asNumber = Number(trimmed);
  if (!Number.isFinite(asNumber)) return undefined;

  return asNumber;
}

const numberFormatter = new Intl.NumberFormat();

/**
 * @category String
 */
export function formatNumber(n: number): string {
  return numberFormatter.format(n);
}

/**
 * @category String
 */
export function stringToLines(str: string): string[] {
  return str
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}
