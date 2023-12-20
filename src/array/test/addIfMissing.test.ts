import { expect, test } from "vitest";
import { addIfMissing } from "../utils";

test("addIfMissing", () => {
  expect(addIfMissing(["a", "b", "c"], "d")).toStrictEqual(["a", "b", "c", "d"]);
  expect(addIfMissing(["a", "b", "c"], "a")).toStrictEqual(["a", "b", "c"]);
  expect(addIfMissing(["a", "b", "c"], "c")).toStrictEqual(["a", "b", "c"]);
  expect(addIfMissing([], "a")).toStrictEqual(["a"]);
  expect(addIfMissing(["a"], "a")).toStrictEqual(["a"]);
});
