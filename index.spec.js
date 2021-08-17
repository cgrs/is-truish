const { default: test } = require("ava");
const isTruish = require("./");

const CASES = [
  [true, true],
  ["true", true],
  [1, true],
  ["1", true],
  ["yes", true],
  [false, false],
  ["false", false],
  [0, false],
  ["0", false],
  ["no", false],
  [undefined, false],
  [null, false],
  [{}, false],
  [3, false],
  [-8.5, false],
  ["test", false],
  [NaN, false],
];

CASES.forEach(([actual, expected]) => {
  test(`${actual} (${typeof actual}) should become ${expected}`, t => {
    t.is(isTruish(actual), expected);
  });
});