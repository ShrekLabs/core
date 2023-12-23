import { Draft, produce } from "immer";
import { EMPTY_ARRAY } from "../core/utils";
import { TFetchModel } from "../models/definitions";
import { isModel } from "../models/utils";

/**
 * @category Array
 */
export function arrayMove<T>(arr: T[], oldIndex: number, newIndex: number): T[] {
  return arrayMoveInPlace(arr.slice(), oldIndex, newIndex);
}

/**
 * @category Array
 */
export function arrayMoveInPlace<T>(arr: T[], oldIndex: number, newIndex: number): T[] {
  const tmp = arr.splice(oldIndex, 1);
  arr.splice(newIndex, 0, ...tmp);
  return arr;
}

/**
 * @category Array
 */
export function notEmptyArray<T>(arr: TFetchModel<T[]> | undefined | null): arr is T[] {
  return isModel(arr) && Boolean(arr?.length);
}

/**
 * @category Array
 */
export function addOrRemove<T>(arr: T[], item: T): T[] {
  const index = arr.indexOf(item);

  return produce(arr, (draft) => {
    if (index === -1) {
      draft.push(item as Draft<T>);
    } else {
      draft.splice(index, 1);
    }
  });
}

/**
 * @category Array
 */
export function removeIfPresent<T>(arr: T[], item: T): T[] {
  const index = arr.indexOf(item);

  return produce(arr, (draft) => {
    if (index >= 0) {
      draft.splice(index, 1);
    }
  });
}

/**
 * @category Array
 */
export function addIfMissing<T>(arr: T[], item: T): T[] {
  const index = arr.indexOf(item);

  return produce(arr, (draft) => {
    if (index < 0) {
      draft.push(item as Draft<T>);
    }
  });
}

/**
 * @category Array
 */
export function enforceArray<T>(arr: T[] | undefined | null): T[] {
  return arr ?? getEmptyArray();
}

/**
 * @category Array
 */
export function getEmptyArray<T>(): T[] {
  return EMPTY_ARRAY as unknown as T[];
}
