import { addString } from "./stringCalculator";

test("should return 0 for empty string", () => {
  expect(addString(" ")).toBe(0);
});

test("should return number itself for single number input", () => {
  expect(addString("1")).toBe(1);
});
