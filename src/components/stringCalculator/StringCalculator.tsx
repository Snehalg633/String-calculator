import React, { useState } from "react";
import { addString } from "../../calculator/stringCalculator";

const StringCalculator = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    setResult(addString(input));
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
    </div>
  );
};

export default StringCalculator;
