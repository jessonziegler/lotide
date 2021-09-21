const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('EQUAL!!');
    return true;
  } else {
    console.log('NOT EQUAL!!!');
    return false;
  }
};

const findKeyByValue = function(input, search) {
  for (const key in input){
    //console.log(key)
    //console.log(input[key])
  if (input[key] === search) {
    return key;
  }
  }
}

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);