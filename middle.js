
const middle = function(arr) {
  const result = [];
  if (arr.length < 3) {
    return result;
  }
  if (arr.length % 2 === 1) {
    const middleIndex = (arr.length - 1) / 2;
    const middleValue = arr[middleIndex];
    result.push(middleValue);
    //console.log('middleIndex***', middleIndex)
    //console.log('middleValue>>>', middleValue)
  } else {
    const middleIndex2 = arr.length / 2;
    const middleIndex1 = middleIndex2 - 1;
    const middleValue1 = arr[middleIndex1];
    const middleValue2 = arr[middleIndex2];
    result.push(middleValue1);
    result.push(middleValue2);
  }
  //
  return result;
};
const arr = [99, 90];
const middleValues = middle([1, 2, 3, 4, 5, 6]); // change this array to any group of numbers odd, even or less then three elements and function will work as intended
console.log(middleValues);
// [9, 24, 16, 'x', "john"] length = 5, middleValue = 16, middleIndex = 2
// [11, 35, 89, 77, 67, 23, 45] length = 7 middleValue = 77 middleIndex = 3
// length = 15 14 / 2 = 7
// length = 9, length - 1 = 8, middleIndex = 8 / 2
// middleIndex = (length -1) / 2
// any odd number divided by 2 will give remainder of 1
// any even number divided by 2 will give a remainder of 0
// modulo % gives the remainder of division of any number
// even number of elements in array

//[99, 90, 65, 12, 94, 11] length = 6 | middleValues = 65, 12 | middleIndex = 2, 3
//[78, 11, 48, 90, 14, 67, 99, 29] length = 8 | middleValues = 90, 14 | middleIndex = 3, 4
