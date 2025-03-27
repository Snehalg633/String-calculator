import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import StringCalculator from "./StringCalculator";

test("should render input box", () => {
  render(<StringCalculator />);

  const inputBox = screen.getByTestId("numbers-input");
  expect(inputBox).toBeInTheDocument();
});

test("should render calculate button", () => {
  render(<StringCalculator />);

  const button = screen.getByText("Calculate");
  expect(button).toBeInTheDocument();
});

test("should displays result when clicking the calculate button", () => {
  render(<StringCalculator />);

  const inputBox = screen.getByTestId("numbers-input");
  const button = screen.getByText("Calculate");

  fireEvent.change(inputBox, { target: { value: "1,2" } });
  fireEvent.click(button);

  expect(screen.getByText("Result: 3")).toBeInTheDocument();
});

test("should handle different inputs correctlly", () => {
  render(<StringCalculator />);
  const inputBox = screen.getByTestId("numbers-input");
  const button = screen.getByText("Calculate");

  fireEvent.change(inputBox, { target: { value: "1\n2,3" } });
  fireEvent.click(button);

  expect(screen.getByText("Result: 6")).toBeInTheDocument();

  fireEvent.change(inputBox, { target: { value: "//|\n3|4|5" } });
  fireEvent.click(button);

  expect(screen.getByText("Result: 12")).toBeInTheDocument();
});
