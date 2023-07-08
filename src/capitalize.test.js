import capitalize from "./capitalize";

test("capitalize first letter", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("Hello")).toBe("Hello");
});

test("if the first symbol isn't a letter, returns the unchanged string", () => {
  expect(capitalize("1st, 2nd, 3rd")).toBe("1st, 2nd, 3rd");
  expect(capitalize("@#90-(30-20-10)-90#@")).toBe("@#90-(30-20-10)-90#@");
  expect(capitalize("     ")).toBe("     ");
});

test("when the string is a single character, should capitalize the character", () => {
  expect(capitalize("h")).toBe("H");
  expect(capitalize("H")).toBe("H");
  expect(capitalize("1")).toBe("1");
  expect(capitalize("@")).toBe("@");
});

test("if the argument isn't a string, returns empty string", () => {
  expect(capitalize({})).toBe('');
  expect(capitalize([])).toBe('');
  expect(capitalize(242342)).toBe('');
});

test("if the argument is empty, returns empty string", () => {
  expect(capitalize()).toBe('');
});