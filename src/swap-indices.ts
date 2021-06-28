/**
 * Create a new string by swapping characters at given indices
 * @param str string to rearrange letters of
 * @param idxOne first index for the swap
 * @param idxTwo second index for the swap
 * @returns a new string where characters at `idxOne` and `idxTwo` have been swapped
 */
const swapIndices = (str: string, idxOne: number, idxTwo: number): string => {
  let resultStr = "";
  for (let index = 0; index < str.length; index++) {
    if (index === idxOne) {
      resultStr += str[idxTwo];
      console.log(str[index]);
    } else if (index === idxTwo) {
      resultStr += str[idxOne];
    } else {
      resultStr += str[index];
    }
  }
  return resultStr;
};

console.log(swapIndices("bukola", 1, 2));

export default swapIndices;
