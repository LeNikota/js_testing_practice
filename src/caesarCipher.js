export default function ceaseCipher(str, key = 0) {
  if (typeof str !== "string" || typeof key !== 'number') return "";
  if (key <= 0) return str;

  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return str
    .split("")
    .map((element) => {
      if (element === " ") return " ";

      const capitalized = element === element.toUpperCase();
      const letter = element.toLowerCase();
      const letterIndex = alphabet.indexOf(letter);
      const shiftedLetter = alphabet[(letterIndex + key) % alphabet.length];

      return capitalized ? shiftedLetter.toUpperCase() : shiftedLetter;
    })
    .join("");
}
