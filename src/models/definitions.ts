/**
 * @category Models
 */
export type TBaseModel = { id: string; is: string };

/**
 * @category Models
 */
export type TRef<TModel extends TBaseModel> = Pick<TModel, "id" | "is">;

/**
 * @category Models
 */
export type TPaginationData = {
  pageSize: number;
  pageNumber: number;
};

/**
 * Result of `normalizr.schema.Array` normalization
 * @category Models
 */
export type TNormalizrRef = {
  id: string;
  schema: string;
};

/**
 * Part of `TFetchModel` which indicates loading state
 * @category Models
 */
export const LOADING = "LOADING";
/**
 * Part of `TFetchModel` which indicates error (missing) state
 * @category Models
 */
export const MISSING = "MISSING";

/**
 * `TFetchModel` is basically one of three states: success (model), loading and error (missing).
 * @category Models
 */
export type TFetchModel<TModel> = TModel | typeof LOADING | typeof MISSING;

/**
 * `TPersistedValue` may be used for LocalStorage or DataBase stored items.
 * @category Models
 */
export type TPersistedValue<TValue> = {
  read: () => TValue;
  write: (value: TValue) => void;
};
