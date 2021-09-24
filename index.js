// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');






module.exports = {
  without:   without,
  takeUntil:   takeUntil,
  map:   map,
  letterPositions:   letterPositions,
  findKeyByValue:   findKeyByValue,
  findKey:   findKey,
  eqObjects:   eqObjects,
  eqArrays:   eqArrays,
  countOnly:   countOnly,
  countLetters:   countLetters,
  assertObjectsEqual:   assertObjectsEqual,
  assertEqual:   assertEqual,
  assertArraysEqual:   assertArraysEqual,
  head:   head,
  tail:   tail,
  middle: middle
};


