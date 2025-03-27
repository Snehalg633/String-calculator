export function addString(numbers: string): number {
  const parseNumbers = (str: string, delimiter: string): number[] => {
    return str
      .split(delimiter)
      .map((item) => Number(item))
      .filter((el) => !isNaN(el));
  };

  const throwNegativeNumberError = (negatives: number[]): void => {
    throw new Error(`Negative numbers are not allowed: ${negatives.join(",")}`);
  };

  let newNumbers: number[];

  if (numbers.startsWith("//")) {
    const delimiterEndIndex =
      numbers.indexOf("\n") === -1
        ? numbers.indexOf("\\n") - 1
        : numbers.indexOf("\n");

    const delimiter = numbers.substring(2, delimiterEndIndex);
    const numbersStr = numbers.substring(delimiterEndIndex + 1);

    const inputWithCommas = numbersStr.replace(new RegExp(delimiter, "g"), ",");
    newNumbers = parseNumbers(inputWithCommas.replace(/\\n/g, "\n"), ",");
  } else {
    const inputWithCommas = numbers.replace(/\\n/g, "\n");
    newNumbers = parseNumbers(inputWithCommas.replace(/\n/g, ","), ",");
  }

  const negativeNumbers = newNumbers.filter((num) => num < 0);

  if (negativeNumbers.length > 0) {
    throwNegativeNumberError(negativeNumbers);
  }

  return newNumbers.reduce((a, b) => a + b, 0);
}
