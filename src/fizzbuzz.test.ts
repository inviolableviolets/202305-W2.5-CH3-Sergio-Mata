import { fizzBuzz } from "./fizzbuzz.js";

describe("When given a sum function", () => {
  describe("When we give it 2 and 6 as parameters", () => {
    test("We should receive [ 2, 'Fizz', 4, 'Buzz', 'Fizz']", () => {
      const value1 = 2;
      const value2 = 15;
      const expected = [
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
        11,
        "Fizz",
        13,
        14,
        "FizzBuzz",
      ];

      const result = fizzBuzz(value1, value2);

      expect(result).toStrictEqual(expected);
    });
  });
});
