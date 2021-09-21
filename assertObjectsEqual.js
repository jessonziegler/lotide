const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1)
    if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key of keys1) {
    //console.log(object1[key], object2[key])
    if (object1[key] !== object2[key] ) {
      if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else {
        return false;

      }
    }
  }
  return true;
  };

 const assertObjectsEqual = function(actual, expected) {
   if (eqObjects(actual, expected)){
     console.log(`objects are equal ${actual}`)
   } else {
     console.log("objects are not equal")
   }
 }
keys = Object.keys(obj1)
for (key in keys) {
  if (obj2[key] !== obj1[key]) {
    return false;
      }
  }

keys = Object.keys(obj2)
for (key in keys) {
  if (obj2[key] !== obj1[key]) {
return false;
  }
}
const assertObjectsEqual = function(actual, expected) {
  let keys = Object.keys(actual)
  for (key of keys) {
    console.log(key)
    if (actual[key] !== expected[key]) {
      return false;
    }
  }

  keys = Object.keys(expected)
  for (key of keys) {
    if (actual[key] !== expected[key]) {
      return false;
    }
  }
  return true;
}
x = { a: '1', b: 2 }
y = { b: 2, a: '1' }
console.log(assertObjectsEqual(x, y))