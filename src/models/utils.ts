import { noop } from "../core/utils";
import { LOADING, MISSING, TBaseModel, TFetchModel, TRef } from "./definitions";

/**
 * @category Models
 */
export function toRef<TModel extends TBaseModel>(entity: TModel): TRef<TModel> {
  return { is: entity.is, id: entity.id };
}

/**
 * @category Models
 */
export function isRef<TModel extends TBaseModel>(ref: unknown, is: TModel["is"]): ref is TRef<TModel> {
  return Boolean(typeof ref === "object" && ref && "is" in ref && "id" in ref && (ref as TModel).is === is);
}

/**
 * @category Models
 */
export function buildRef<TModel extends TBaseModel>(is: TModel["is"], id: TModel["id"]): TRef<TModel> {
  return { is, id };
}

/**
 * @category Models
 */
export const generateRandomId: (key?: string) => string = ((): (() => string) => {
  let idCounter = 0;

  return function generateRandomIdImpl(key = "model"): string {
    idCounter += 1;

    return `${key}-${Date.now()}-${idCounter}`;
  };
})();

/**
 * @category Models
 */
export function unusedFields(...fields: unknown[]): void {
  noop(fields);
}

/**
 * @category Models
 */
export function isLoading<TModel>(model: TFetchModel<TModel> | undefined): model is typeof LOADING {
  return model === LOADING;
}

/**
 * @category Models
 */
export function isMissing<TModel>(model: TFetchModel<TModel> | undefined): model is typeof MISSING {
  return model === MISSING;
}

/**
 * @category Models
 */
export function isModel<TModel>(model: TFetchModel<TModel> | undefined): model is TModel {
  return !isLoading(model) && !isMissing(model);
}

/**
 * @category Models
 */
export function toFetchModel<TModel>(loading: boolean, model: TModel | undefined): TFetchModel<TModel> {
  return loading ? LOADING : model ?? MISSING;
}
