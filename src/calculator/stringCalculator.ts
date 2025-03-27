export function addString(numbers: string): number {
  if (numbers === " ") return 0;

  const inputWithCommas = numbers.replace(/\n/g, ",");
  const numberArr = inputWithCommas.split(",");

  let sum = 0;
  for (let i = 0; i < numberArr.length; i++) {
    sum += Number(numberArr[i]);
  }
  return sum;
}
