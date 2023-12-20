import { Draft, produce } from "immer";
import { EMPTY_ARRAY } from "../core/utils";
import { TFetchModel } from "../models/definitions";
import { isModel } from "../models/utils";

export function arrayMove<T>(arr: T[], oldIndex: number, newIndex: number): T[] {
  return arrayMoveInPlace(arr.slice(), oldIndex, newIndex);
}

export function arrayMoveInPlace<T>(arr: T[], oldIndex: number, newIndex: number): T[] {
  const tmp = arr.splice(oldIndex, 1);
  arr.splice(newIndex, 0, ...tmp);
  return arr;
}

export function notEmptyArray<T>(arr: TFetchModel<T[]> | undefined | null): arr is T[] {
  return isModel(arr) && Boolean(arr?.length);
}

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

export function removeIfPresent<T>(arr: T[], item: T): T[] {
  const index = arr.indexOf(item);

  return produce(arr, (draft) => {
    if (index >= 0) {
      draft.splice(index, 1);
    }
  });
}

export function addIfMissing<T>(arr: T[], item: T): T[] {
  const index = arr.indexOf(item);

  return produce(arr, (draft) => {
    if (index < 0) {
      draft.push(item as Draft<T>);
    }
  });
}

export function enforceArray<T>(arr: T[] | undefined | null): T[] {
  return arr ?? getEmptyArray();
}

export function getEmptyArray<T>(): T[] {
  return EMPTY_ARRAY as unknown as T[];
}
