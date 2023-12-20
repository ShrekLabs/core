import { noop } from "../core/utils";
import { LOADING, MISSING, TBaseModel, TFetchModel, TRef } from "./definitions";

export function toRef<TModel extends TBaseModel>(entity: TModel): TRef<TModel> {
  return { is: entity.is, id: entity.id };
}

export function isRef<TModel extends TBaseModel>(ref: unknown, is: TModel["is"]): ref is TRef<TModel> {
  return Boolean(typeof ref === "object" && ref && "is" in ref && "id" in ref && (ref as TModel).is === is);
}

export function buildRef<TModel extends TBaseModel>(is: TModel["is"], id: TModel["id"]): TRef<TModel> {
  return { is, id };
}

export const generateRandomId: (key?: string) => string = ((): (() => string) => {
  let idCounter = 0;

  return function generateRandomIdImpl(key = "model"): string {
    idCounter += 1;

    return `${key}-${Date.now()}-${idCounter}`;
  };
})();

export function unusedFields(...fields: unknown[]): void {
  noop(fields);
}

export function isLoading<TModel>(model: TFetchModel<TModel> | undefined): model is typeof LOADING {
  return model === LOADING;
}

export function isMissing<TModel>(model: TFetchModel<TModel> | undefined): model is typeof MISSING {
  return model === MISSING;
}

export function isModel<TModel>(model: TFetchModel<TModel> | undefined): model is TModel {
  return !isLoading(model) && !isMissing(model);
}

export function toFetchModel<TModel>(loading: boolean, model: TModel | undefined): TFetchModel<TModel> {
  return loading ? LOADING : model ?? MISSING;
}
