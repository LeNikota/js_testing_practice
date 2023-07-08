import calculator from "./calculator.js";

describe("calculator", () => {
  test("when the two arguments are not numbers, return NaN", () => {
    expect(calculator.add({}, [])).toBe(NaN);
    expect(calculator.add({}, 5)).toBe(NaN);
    expect(calculator.add("5", 5)).toBe(NaN);
    expect(calculator.subtract({}, [])).toBe(NaN);
    expect(calculator.subtract({}, 5)).toBe(NaN);
    expect(calculator.subtract("5", 5)).toBe(NaN);
    expect(calculator.multiply({}, [])).toBe(NaN);
    expect(calculator.multiply({}, 5)).toBe(NaN);
    expect(calculator.multiply("5", 5)).toBe(NaN);
    expect(calculator.divide({}, [])).toBe(NaN);
    expect(calculator.divide({}, 5)).toBe(NaN);
    expect(calculator.divide("5", 5)).toBe(NaN);
  });

  describe("add", () => {
    test("should add two numbers", () => {
      expect(calculator.add(3, 2)).toBe(5);
      expect(calculator.add(10, 20)).toBe(30);
      expect(calculator.add(100, 203)).toBe(303);
    });
  });

  describe("subtract", () => {
    test("should subtract two numbers", () => {
      expect(calculator.subtract(3, 2)).toBe(1);
      expect(calculator.subtract(10, 20)).toBe(-10);
      expect(calculator.subtract(100, 203)).toBe(-103);
    });
  });

  describe("multiply", () => {
    test("should multiple two numbers", () => {
      expect(calculator.multiply(3, 2)).toBe(6);
      expect(calculator.multiply(10, 20)).toBe(200);
      expect(calculator.multiply(100, 203)).toBe(20300);
    });
  });

  describe("divide", () => {
    test("should divide two numbers", () => {
      expect(calculator.divide(3, 2)).toBe(1.5);
      expect(calculator.divide(10, 20)).toBe(0.5);
      expect(calculator.divide(100, 203)).toBeCloseTo(0.4926);
    });
  });
});
