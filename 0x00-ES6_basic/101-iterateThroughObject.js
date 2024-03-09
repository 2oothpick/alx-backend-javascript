export default function iterateThroughObject(reportWithIterator) {
  let itemstr = ''; let
    i = 0;
  for (const item of reportWithIterator) {
    // eslint-disable-next-line eqeqeq
    if (reportWithIterator.length - 1 == i) {
      itemstr += item;
    } else {
      itemstr += `${item} | `;
    }
    // eslint-disable-next-line no-plusplus
    i++;
  }
  return itemstr;
}
