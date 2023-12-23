/**
 * @category Random utils
 */
export function getRandomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

/**
 * @category Random utils
 */
export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @category Random utils
 */
export function randomFrom<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}
