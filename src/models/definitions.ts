export type TBaseModel = { id: string; is: string };

export type TRef<TModel extends TBaseModel> = Pick<TModel, "id" | "is">;

export type TPaginationData = {
  pageSize: number;
  pageNumber: number;
};

// result of normalizr.schema.Array normalization
export type TNormalizrRef = {
  id: string;
  schema: string;
};

export const LOADING = "LOADING";
export const MISSING = "MISSING";

export type TFetchModel<TModel> = TModel | typeof LOADING | typeof MISSING;

export type TPersistedValue<TValue> = {
  read: () => TValue;
  write: (value: TValue) => void;
};
