const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;

  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;

    }

  }
  return true;
};

const assertEqual = function(actual, expected) {
  //console.log(actual)
  if (actual === expected) {
    console.log('EQUAL!!');
    return true;
  } else {
    console.log('NOT EQUAL!!!');
    return false;
  }
};

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
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
