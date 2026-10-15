'use strict';

const arr = [
     true, 'hello', 5, 12, -200, false, false, 'word',
  3, 'abcd', 100, true, undefined, null, 11n, 'text', 
];
const types = {
  number: 0,
  string: 0,
  boolean: 0,
  undefined: 0,
  object: 0,
  function: 0,
  bigint: 0,
  symbol: 0,
};

for (const item of arr) {
    const type = typeof item;
    types[type]++;
}
console.dir(types);