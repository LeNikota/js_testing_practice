import caesarCipher from "./caesarCipher";

describe("caesarCipher", () => {
  test("shifts by the provided key", () => {
    expect(caesarCipher("Lost in the rythem", 1)).toBe("Mptu jo uif szuifn");
    expect(caesarCipher("Lost in the rythem", 5)).toBe("Qtxy ns ymj wdymjr");
    expect(caesarCipher("Lost in the rythem", 10)).toBe("Vycd sx dro bidrow");
    expect(caesarCipher("Lost in the rythem", 25)).toBe("Knrs hm sgd qxsgdl");
    expect(caesarCipher("Lost in the rythem", 100)).toBe("Hkop ej pda nupdai");
    expect(caesarCipher("Hkop ej pda nupdai", 4)).toBe("Lost in the rythem");
  });

  test("should handle uppercase letters", () => {
    expect(caesarCipher("ABC", 1)).toBe("BCD");
    expect(caesarCipher("ABC", 3)).toBe("DEF");
    expect(caesarCipher("XYZ", 5)).toBe("CDE");
  });

  test("should preserve spaces", () => {
    expect(caesarCipher("hello world", 1)).toBe("ifmmp xpsme");
    expect(caesarCipher("hello world", 3)).toBe("khoor zruog");
  });

  test("wrapping from z to a", () => {
    expect(caesarCipher("z", 1)).toBe("a");
    expect(caesarCipher("z", 2)).toBe("b");
    expect(caesarCipher("z", 26)).toBe("z");
  });

  test("returns an empty string if arguments are not provided or invalid", () => {
    expect(caesarCipher()).toBe("");
    expect(caesarCipher({}, 5)).toBe("");
    expect(caesarCipher([], 5)).toBe("");
    expect(caesarCipher(405060, 5)).toBe("");
    expect(caesarCipher("Lost in the rythem", {})).toBe("");
    expect(caesarCipher("Lost in the rythem", [])).toBe("");
    expect(caesarCipher("Lost in the rythem", "Lost in the rythem")).toBe("");
  });

  test("shifts by 0 when the key is not specified or smaller than 0", () => {
    expect(caesarCipher("Lost in the rythem")).toBe("Lost in the rythem");
    expect(caesarCipher("Lost in the rythem", -5)).toBe("Lost in the rythem");
  });
});
