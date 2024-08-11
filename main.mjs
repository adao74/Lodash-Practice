// node --experimental-modules main.mjs
// The requested module 'lodash' is a CommonJS module, which may not support all module.exports as named exports. 
// i.e. import {shuffle} from 'lodash' didn't work (note that importing the full build i.e. import _ from 'lodash' works though)
// CommonJS modules can always be imported via the default export, as shown below:

import pkg from 'lodash';
const { _, shuffle, reverse, without, range, sampleSize } = pkg;

const shuffled = _.shuffle([1, 2, 3, 4]);
console.log(shuffled)

const shuffled2 = shuffle([1, 2, 3, 4]);
console.log(shuffled2)

const reversed = reverse([1, 2, 3, 4])
console.log(reversed)

const excluded = without([2, 1, 2, 3], 1, 2);
console.log(excluded)

const numbers = range(1, 100);
console.log(numbers)

const sample = sampleSize(numbers, 6)
console.log(sample)