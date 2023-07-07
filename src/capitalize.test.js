import capitalize from "./capitalize";

test("capitalize first letter", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("Hello")).toBe("Hello");
});

test("if the first symbol isn't a letter, returns the unchanged string", () => {
  expect(capitalize("1st, 2nd, 3rd")).toBe("1st, 2nd, 3rd");
  expect(capitalize("@#90-(30-20-10)-90#@")).toBe("@#90-(30-20-10)-90#@");
});

test("if the argument isn't a string, returns null", () => {
  expect(capitalize({})).toBe(null);
  expect(capitalize([])).toBe(null);
  expect(capitalize(242342)).toBe(null);
});

test("if the argument is empty, returns null", () => {
  expect(capitalize()).toBe(null);
});
