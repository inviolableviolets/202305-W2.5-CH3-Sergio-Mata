export const fizzBuzz = (start: number, end: number) => {
  const fizzbuzzedNumbers: unknown[] = [];
  for (let number = start; number <= end; number++) {
    fizzbuzzedNumbers.push(number);

    if (number % 3 === 0) {
      fizzbuzzedNumbers.pop();
      fizzbuzzedNumbers.push("Fizz");
    }

    if (number % 5 === 0) {
      fizzbuzzedNumbers.pop();
      fizzbuzzedNumbers.push("Buzz");
    }

    if (number % 3 === 0 && number % 5 === 0) {
      fizzbuzzedNumbers.pop();
      fizzbuzzedNumbers.push("FizzBuzz");
    }
  }

  return fizzbuzzedNumbers;
};
