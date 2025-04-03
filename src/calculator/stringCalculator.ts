export function addString(numbers: string): number {
  function convertNumb(numbers: string) {
    let delimiter = "\n";
    let numbersStr = numbers;

    if (numbers.startsWith("//")) {
      const delimiterEndIndex =
        numbers.indexOf("\n") === -1
          ? numbers.indexOf("\\n") - 1
          : numbers.indexOf("\n");

      delimiter = numbers.substring(2, delimiterEndIndex);
      numbersStr = numbers.substring(delimiterEndIndex + 1);
    }

    const inputWithCommas = numbersStr.replace(new RegExp(delimiter, "g"), ",");
    return parseNumbers(inputWithCommas.replace(/\\n/g, "\n"), ",");
  }

  const parseNumbers = (str: string, delimiter: string): number[] => {
    return str
      .split(delimiter)
      .map((item) => Number(item))
      .filter((el) => !isNaN(el));
  };

  const throwNegativeNumberError = (negatives: number[]): void => {
    throw new Error(`Negative numbers are not allowed: ${negatives.join(",")}`);
  };

  let newNumbers: number[] = convertNumb(numbers);

  const negativeNumbers = newNumbers.filter((num) => num < 0);

  if (negativeNumbers.length > 0) {
    throwNegativeNumberError(negativeNumbers);
  }

  return newNumbers.reduce((a, b) => a + b, 0);
}
