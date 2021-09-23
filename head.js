


const head = function(array) {
  // ! === falsy
  // 0 === falsy
  // falsy = undefined, null, 0, '', NaN
  // truthy
  if (array.length === 0) {
    return undefined;
  } else {
    return array[0];
  }

};
module.exports = head;



