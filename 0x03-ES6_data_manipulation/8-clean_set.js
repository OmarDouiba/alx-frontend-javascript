export default function cleanSet(set, startString) {
  const str = [];
  if (typeof startString !== 'string' || !(set instanceof Set) || startString.length === 0) {
    return '';
  }
  for (const name of set) {
    if (name && name.startsWith(startString)) {
      str.push(name.slice(startString.length));
    }
  }
  return str.join('-');
}
