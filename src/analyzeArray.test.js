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

  expect(analyzeArray([-10, -20, 100, -30])).toEqual({
    min: -30,
    max: 100,
    average: 10,
    length: 4,
  });
});

test("analyzes an array with one element", () => {
  expect(analyzeArray([5])).toEqual({
    min: 5,
    max: 5,
    average: 5,
    length: 1,
  });
});

test("returns null for non-array inputs", () => {
  expect(analyzeArray()).toBeNull();
  expect(analyzeArray(null)).toBeNull();
  expect(analyzeArray(undefined)).toBeNull();
  expect(analyzeArray("")).toBeNull();
  expect(analyzeArray(123)).toBeNull();
  expect(analyzeArray({})).toBeNull();
});

test("returns null for array containing or non-numeric values", () => {
  expect(analyzeArray([1, 2, "3", 4, 5])).toBeNull();
  expect(analyzeArray([1, 2, null, 4, 5])).toBeNull();
  expect(analyzeArray([1, 2, false, 4, 5])).toBeNull();
  expect(analyzeArray([1, 2, [2,3], 4, 5])).toBeNull();
  expect(analyzeArray([1, 2, {}, 4, 5])).toBeNull();
});

test("returns null for empty array", () => {
  expect(analyzeArray([])).toBeNull();
});
