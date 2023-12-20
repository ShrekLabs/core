import { expect, test } from "vitest";
import { removeIfPresent } from "../utils";

test("removeIfPresent", () => {
  expect(removeIfPresent(["a", "b", "c"], "d")).toStrictEqual(["a", "b", "c"]);
  expect(removeIfPresent(["a", "b", "c"], "a")).toStrictEqual(["b", "c"]);
  expect(removeIfPresent(["a", "b", "c"], "c")).toStrictEqual(["a", "b"]);
  expect(removeIfPresent([], "a")).toStrictEqual([]);
  expect(removeIfPresent(["a"], "a")).toStrictEqual([]);
});
