const middle = function(arr) {
  const result = [];
  if (arr.length < 3) {
    return result;
  }
  if (arr.length % 2 === 1) {
    const middleIndex = (arr.length - 1) / 2;
    const middleValue = arr[middleIndex];
    result.push(middleValue);

  } else {
    const middleIndex2 = arr.length / 2;
    const middleIndex1 = middleIndex2 - 1;
    const middleValue1 = arr[middleIndex1];
    const middleValue2 = arr[middleIndex2];
    result.push(middleValue1);
    result.push(middleValue2);
  }

  return result;
};

module.exports = middle;
