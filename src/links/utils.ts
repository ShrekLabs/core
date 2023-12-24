/**
 * @category Links
 */
export function openLinkInNewTab(link: string): void {
  window.open(link, "_blank");
}

/**
 * @category Links
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}
