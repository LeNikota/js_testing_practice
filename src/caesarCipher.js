export default function ceaseCipher(str, key = 0) {
  if (typeof str !== "string" || typeof key !== "number") return "";
  if (key <= 0) return str;

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return Array.from(str, (char) => {
    if (char === " ") return " ";

    const isUppercase = char === char.toUpperCase();
    const lowercaseChar = char.toLowerCase();
    const letterIndex = alphabet.indexOf(lowercaseChar);
    const shiftedIndex = (letterIndex + key) % alphabet.length;
    const shiftedLetter = alphabet[shiftedIndex];

    return isUppercase ? shiftedLetter.toUpperCase() : shiftedLetter;
  }).join("");
}
