import React from "react";

const StringCalculator = () => {
  return (
    <div>
      <input
        data-testid="numbers-input"
        type="text"
        placeholder="Enter numbers..."
      />
      <button>Calculate</button>
    </div>
  );
};

export default StringCalculator;
