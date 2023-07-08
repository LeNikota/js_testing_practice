export default function capitalize(str = null) {
  if (typeof str !== "string") return '';
  if (str.charAt(0) === str.charAt(0).toUpperCase()) return str;

  return str.charAt(0).toUpperCase() + str.slice(1);
}
