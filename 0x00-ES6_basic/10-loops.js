export default function appendToEachArrayValue(array, appendString) {
  const arrayN = [];
  for (const value of array) {
    arrayN.push(appendString + value);
  }
  return arrayN;
}
