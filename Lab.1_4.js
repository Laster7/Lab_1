'use strict';

const arr = [
     true, 'hello', 5, 12, -200, false, false, 'word',
  3, 'abcd', 100, true, undefined, null, 11n, 'text', 
];

const types = {};
for (const item of arr) {
    const type = typeof item;
    if(types[type] === undefined) {
        types[type] = 0;
    }
    types[type]++;
}

console.dir(types);