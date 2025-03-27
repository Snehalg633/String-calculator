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

test("should handle new line as separator", () => {
  expect(addString("1\n2,3")).toBe(6);
});

test("should support different delimiter ", () => {
  expect(addString("//|\n3|4|5")).toBe(12);
});

test("should throws error for negative numbers", () => {
  expect(() => addString("1,-2,3-4")).toThrow(
    "Negative numbers are not allowed: -2,-4"
  );
});
