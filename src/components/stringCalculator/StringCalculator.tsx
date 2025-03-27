import React, { useState } from "react";
import { addString } from "../../calculator/stringCalculator";

const StringCalculator = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    try {
      setResult(addString(input));
      setError(null);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
        setResult(null);
      }
    }
  };

  return (
    <div>
      <input
        data-testid="numbers-input"
        type="text"
        placeholder="Enter numbers..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleCalculate}>Calculate</button>
      <p>Result: {result}</p>
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default StringCalculator;
