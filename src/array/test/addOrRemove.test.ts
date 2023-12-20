// sum.test.js
import { expect, test } from "vitest";
import { addOrRemove } from "../utils";

test("addOrRemove", () => {
  expect(addOrRemove(["a", "b", "c"], "d")).toStrictEqual(["a", "b", "c", "d"]);
  expect(addOrRemove(["a", "b", "c"], "a")).toStrictEqual(["b", "c"]);
  expect(addOrRemove(["a", "b", "c"], "c")).toStrictEqual(["a", "b"]);
  expect(addOrRemove([], "a")).toStrictEqual(["a"]);
  expect(addOrRemove(["a"], "a")).toStrictEqual([]);
});
