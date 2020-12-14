'use strict';

// algo: str split to array with strToFind divider.
// result is array length decreased by 1

// input: string string
// output: number
function countOccurrences(str, strToFind) {
   return strToFind.length === 0 ? null : str.split(strToFind).length - 1;
}
