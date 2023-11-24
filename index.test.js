import assert from 'node:assert';
import test from 'node:test';
import isTruish from './index.js';

const CASES = [
  [     false, false ],
  [   "false", false ],
  [         0, false ],
  [       "0", false ],
  [ undefined, false ],
  [      null, false ],
  [        {}, false ],
  [       NaN, false ],
  [      -8.5, false ],
  [         3, false ],
  [    "test", false ],
  [      "no", false ],
  [      true,  true ],
  [    "true",  true ],
  [     "yes",  true ],
  [         1,  true ],
  [       "1",  true ],
];

CASES.forEach(([actual, expected]) => {
  test(`${actual} (${typeof actual}) should become ${expected}`, t => {
    assert.strictEqual(isTruish(actual), expected);
  });
});