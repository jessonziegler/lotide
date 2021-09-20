const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++){
    const char = sentence[i]
    if (char !== " ") {
      if (results[char]) {
        results[char].push(i)
      } else {
       results[char] = [i]
      }
    }


    console.log("char ->", char);
  console.log("i->", i);
  }


  return results;
};
console.log(letterPositions("Lighthouse in the house"));
