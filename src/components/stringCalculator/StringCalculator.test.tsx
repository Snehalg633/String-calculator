import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import StringCalculator from "./StringCalculator";
import { addString } from "../../calculator/stringCalculator";

jest.mock("../../calculator/stringCalculator", () => ({
  addString: jest.fn(),
}));

describe("StringCalculator Component", () => {
  beforeEach(() => {
    (addString as jest.Mock).mockClear();
  });

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
    (addString as jest.Mock).mockReturnValue(3);

    const inputBox = screen.getByTestId("numbers-input");
    const button = screen.getByText("Calculate");

    fireEvent.change(inputBox, { target: { value: "1,2" } });
    fireEvent.click(button);

    expect(screen.getByText("Result: 3")).toBeInTheDocument();
  });

  test("should handle different inputs correctlly", async () => {
    render(<StringCalculator />);
    (addString as jest.Mock).mockReturnValue(6);
    const inputBox = screen.getByTestId("numbers-input");
    const button = screen.getByText("Calculate");

    fireEvent.change(inputBox, { target: { value: "1\n2,3" } });
    fireEvent.click(button);

    expect(screen.getByText("Result: 6")).toBeInTheDocument();
  });

  test("handles custom delimiters", () => {
    render(<StringCalculator />);
    (addString as jest.Mock).mockReturnValue(12);

    const inputBox = screen.getByTestId("numbers-input");
    const button = screen.getByText("Calculate");

    fireEvent.change(inputBox, { target: { value: "//|\n3|4|5" } });
    fireEvent.click(button);

    expect(screen.getByText("Result: 12")).toBeInTheDocument();
  });

  test("displays an error message when input contains negative numbers", () => {
    (addString as jest.Mock).mockImplementation(() => {
      throw new Error("negative numbers not allowed: -2");
    });

    render(<StringCalculator />);
    const inputBox = screen.getByTestId("numbers-input");
    const button = screen.getByText("Calculate");

    fireEvent.change(inputBox, { target: { value: "1,-2,3" } });
    fireEvent.click(button);

    expect(
      screen.getByText(/error: negative numbers not allowed: -2/i)
    ).toBeInTheDocument();
  });
});
