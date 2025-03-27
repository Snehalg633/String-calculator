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
