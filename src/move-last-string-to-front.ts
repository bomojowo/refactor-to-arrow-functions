/**
 * Creates a new array of strings from a given array of strings,
 *  by moving the final element to the front
 *
 * @param stringArr array of strings
 * @returns a new array of strings
 */
function moveLastStringToFront(stringArr: string[]): string[] {
  const lastIndex = stringArr.length - 1;
  const lastElement = stringArr[lastIndex];
  const resultArr = [lastElement];
  console.log(resultArr);

  // iterate up to, and EXCLUDING, lastIndex
  for (let index = 0; index < lastIndex; index++) {
    const targetElement = stringArr[index];
    console.log(stringArr[index]);
    //console.log(targetElement);
    resultArr.push(targetElement);
  }

  return resultArr;
}
console.log(moveLastStringToFront(["2", "3", "4", "5"]));

export default moveLastStringToFront;
