import reverseString from "./reverseString";

test("returns the reversed string", () => {
  expect(reverseString("I have a problem")).toBe("melborp a evah I");
  expect(reverseString("A man, a plan, a canal Panama")).toBe(
    "amanaP lanac a ,nalp a ,nam A"
  );
  expect(reverseString("203040")).toBe("040302");
});

test("when argument is not a string, returns an empty string", () => {
  expect(reverseString(234251515)).toBe("");
  expect(reverseString([])).toBe("");
  expect(reverseString({})).toBe("");
});
