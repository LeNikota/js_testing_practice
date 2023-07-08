import calculator from "./calculator.js";

describe("calculator", () => {
  describe("add", () => {
    test("should add two numbers", () => {
      expect(calculator.add(3, 2)).toBe(5);
      expect(calculator.add(10, 20)).toBe(30);
      expect(calculator.add(100, 203)).toBe(303);
    });

    test("should return NaN if any argument is not a number", () => {
      expect(calculator.add({}, 5)).toBeNaN();
      expect(calculator.add("5", 5)).toBeNaN();
    });
  });

  describe("subtract", () => {
    test("should subtract two numbers", () => {
      expect(calculator.subtract(3, 2)).toBe(1);
      expect(calculator.subtract(10, 20)).toBe(-10);
      expect(calculator.subtract(100, 203)).toBe(-103);
    });

    test("should return NaN if any argument is not a number", () => {
      expect(calculator.subtract({}, 5)).toBeNaN();
      expect(calculator.subtract("5", 5)).toBeNaN();
    });
  });

  describe("multiply", () => {
    test("should multiply two numbers", () => {
      expect(calculator.multiply(3, 2)).toBe(6);
      expect(calculator.multiply(10, 20)).toBe(200);
      expect(calculator.multiply(100, 203)).toBe(20300);
    });

    test("should return NaN if any argument is not a number", () => {
      expect(calculator.multiply({}, 5)).toBeNaN();
      expect(calculator.multiply("5", 5)).toBeNaN();
    });
  });

  describe("divide", () => {
    test("should divide two numbers", () => {
      expect(calculator.divide(3, 2)).toBe(1.5);
      expect(calculator.divide(10, 20)).toBe(0.5);
      expect(calculator.divide(100, 203)).toBeCloseTo(0.4926);
    });

    test("should return NaN if any argument is not a number", () => {
      expect(calculator.divide({}, 5)).toBeNaN();
      expect(calculator.divide("5", 5)).toBeNaN();
    });

    test("should return NaN if dividing by zero", () => {
      expect(calculator.divide(5, 0)).toBeNaN();
    });
  });
});