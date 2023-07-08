export default function analyzeArray(arr) {
  if (
    !Array.isArray(arr) ||
    arr.length === 0 ||
    arr.some((element) => typeof element !== "number")
  ) {
    return null;
  }

  return {
    min: Math.min(...arr),
    max: Math.max(...arr),
    average:
      arr.reduce((accumulator, current) => accumulator + current, 0) /
      arr.length,
    length: arr.length,
  };
}
