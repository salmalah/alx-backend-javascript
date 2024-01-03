export default function iterateThroughObject(reportWithIterator) {
  let arrayIt = '';

  for (const [idx, emp] of Object.entries(reportWithIterator)) {
    arrayIt += `${emp}`;

    if (parseInt(idx) !== reportWithIterator.length - 1) {
      arrayIt += ' | ';
    }
  }

  return arrayIt;
}
