import { addString } from "./stringCalculator";

test("should return 0 for empty string", () => {
  expect(addString(" ")).toBe(0);
});

test("should return number itself for single number input", () => {
  expect(addString("1")).toBe(1);
});

test("should return sum of two comma-separated numbers", () => {
  expect(addString("1,2")).toBe(3);
});

test("should return sum of multiple numbers ", () => {
  expect(addString("2,3,4,5")).toBe(14);
});
