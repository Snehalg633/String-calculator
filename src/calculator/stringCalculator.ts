export function addString(numbers: string): number {
  //   if (numbers === " ") return 0;

  //   const inputWithCommas = numbers.replace(/\n/g, ",");
  //   const numberArr = inputWithCommas.split(",");

  function parseNumbers(str: string, delimiter: string): number[] {
    const numstrings = str.split(delimiter);

    const numberArr: number[] = [];

    for (let i = 0; i < numstrings.length; i++) {
      const num = Number(numstrings[i]);
      if (!isNaN(num)) {
        numberArr.push(num);
      }
    }
    return numberArr;
  }

  function throwNegativeNumberError(negatives: number[]): void {
    throw new Error(`Negative numbers are not allowed: ${negatives.join(",")}`);
  }

  let newNumbers: number[] = [];

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

  let sum = 0;
  for (let i = 0; i < newNumbers.length; i++) {
    sum += Number(newNumbers[i]);
  }
  return sum;
}
