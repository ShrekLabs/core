export function capitalize(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function stringToNumberOrUndefined(str: string): number | undefined {
  const trimmed = str.trim();
  if (!trimmed) return undefined;

  const asNumber = Number(trimmed);
  if (!Number.isFinite(asNumber)) return undefined;

  return asNumber;
}

const numberFormatter = new Intl.NumberFormat();
export function formatNumber(n: number): string {
  return numberFormatter.format(n);
}

export function stringToLines(str: string): string[] {
  return str
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}
