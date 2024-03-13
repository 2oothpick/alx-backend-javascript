export default function iterateThroughObject(reportWithIterator) {
  let newStr = '';
  for (const item of reportWithIterator) {
    if (item === reportWithIterator[reportWithIterator.length - 1]) {
      newStr += item;
    } else {
      newStr += `${item} | `;
    }
  }
  return newStr;
}
