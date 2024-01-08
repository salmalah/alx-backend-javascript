// 8-clean_set.js
export default function cleanSet(set, startString) {
  // Filter the set values that start with the specified string
  const filteredValues = [...set].filter(value => value.startsWith(startString));

  // Strip the startString from each value
  const strippedValues = filteredValues.map(value => value.slice(startString.length));

  return strippedValues.join('-');
}
