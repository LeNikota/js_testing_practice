import ceaseCipher from "./caesarCipher";

test("shifts by the provided key", () => {
  expect(ceaseCipher("Lost in the rythem", 1)).toBe("Mptu jo uif szuifn");
  expect(ceaseCipher("Lost in the rythem", 5)).toBe("Qtxy ns ymj wdymjr");
  expect(ceaseCipher("Lost in the rythem", 10)).toBe("Vycd sx dro bidrow");
  expect(ceaseCipher("Lost in the rythem", 25)).toBe("Knrs hm sgd qxsgdl");
  expect(ceaseCipher("Lost in the rythem", 100)).toBe("Hkop ej pda nupdai");
  expect(ceaseCipher("Hkop ej pda nupdai", 4)).toBe("Lost in the rythem");
});

test("should handle uppercase letters", () => {
  expect(ceaseCipher("ABC", 1)).toBe("BCD");
  expect(ceaseCipher("ABC", 3)).toBe("DEF");
  expect(ceaseCipher("XYZ", 5)).toBe("CDE");
});

test("should preserve spaces", () => {
  expect(ceaseCipher("hello world", 1)).toBe("ifmmp xpsme");
  expect(ceaseCipher("hello world", 3)).toBe("khoor zruog");
});

test("returns an empty string if the arguments are not provided", () => {
  expect(ceaseCipher()).toBe("");
});

test("returns an empty string if the first argument is not a string", () => {
  expect(ceaseCipher({}, 5)).toBe("");
  expect(ceaseCipher([], 5)).toBe("");
  expect(ceaseCipher(405060, 5)).toBe("");
});

test("returns an empty string if the second argument is not a number", () => {
  expect(ceaseCipher("Lost in the rythem", {})).toBe("");
  expect(ceaseCipher("Lost in the rythem", [])).toBe("");
  expect(ceaseCipher("Lost in the rythem", "Lost in the rythem")).toBe("");
});

test("shifts by 0 when the the key doesn't specified", () => {
  expect(ceaseCipher("Lost in the rythem")).toBe("Lost in the rythem");
});

test("shifts by 0 when the the key smaller than 0", () => {
  expect(ceaseCipher("Lost in the rythem", -5)).toBe("Lost in the rythem");
});