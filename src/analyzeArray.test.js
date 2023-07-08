import analyzeArray from "./analyzeArray";

test("analyzes an array, returns average, min, max, length", () => {
  expect(analyzeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual({
    min: 1,
    max: 10,
    average: 5.5,
    length: 10,
  });
  expect(analyzeArray([2, 5, 10, 20, 40])).toEqual({
    min: 2,
    max: 40,
    average: 15.4,
    length: 5,
  });
});
