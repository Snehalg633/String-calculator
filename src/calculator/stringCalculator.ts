export function addString(numbers: string): number {
  if (numbers === " ") return 0;

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += parseInt(numbers);
  }
  return sum;
}
