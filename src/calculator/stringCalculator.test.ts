import { addString } from "./stringCalculator";

test("should return 0 for empty string", () => {
  expect(addString(" ")).toBe(0);
});
