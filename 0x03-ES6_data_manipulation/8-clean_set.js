export default function cleanSet(set, startString) {
  let str = [];
  if (startString === "") {
    return "";
  }
  for (const name of set) {
    if (name.startsWith(startString)) {
      str.push(name.slice(startString.length));
    }
  }
  return str.join("-");
}
