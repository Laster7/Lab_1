'use strict';

const arr = [
     true, 'hello', 5, 12, -200, false, false, 'word',
  3, 'abcd', 100, true, undefined, null, 11n, 'text', 
];
const types = {
    Number: 0,
    String:0,
    Boolean:0,
    undefined:0,
    Object:0,
    function:0,
    BigInt:0,
    Symbol:0,
};

for (const item of arr) {
    const type = typeof item;
    types[type]++;
}
console.dir(types);