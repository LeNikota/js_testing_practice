import capitalize from "./capitalize";

test("capitalize first letter", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("Hello")).toBe("Hello");
});

test("if the argument is empty, returns null", () => {
  expect(capitalize()).toBe(null);
});

test("if the argument is empty, returns null", () => {
  expect(capitalize()).toBe(null);
});
//-----------------------------------------
test("if the argument is not a string, returns null", () => {
  expect(capitalize({})).toBe(null);
  expect(capitalize([])).toBe(null);
  expect(capitalize(242342)).toBe(null);
});

test("if the argument is a string number, returns null", () => {
  expect(capitalize('242342')).toBe(null);
});

test("if the first symbol in the text is a digit, returns null", () => {
  expect(capitalize('1st hello 2nd bye')).toBe(null);
});

test("if the first symbol isn't a digit, returns the text with the capitalized first letter", () => {
  expect(capitalize('current year is 2023')).toBe('Current year is 2023');
});

test("if the first symbol is something strange, returns the text with the capitalized first letter", () => {
  expect(capitalize('@')).toBe(null);
});


//when there is nothing to capatalise return uncepetelised not null
//ASK chat gpt everything fine