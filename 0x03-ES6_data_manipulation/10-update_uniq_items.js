export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const item of map) {
    if (item[1] === 1) {
      map.set(item[0], 100);
    }
  }
  //   for (const [key, value] of map.entries()) {
  //     if (value === 1) {
  //       map.set(key, 100);
  //     } else {
  //       map.set(key, value);
  //     }
  //   }
  return map;
}
