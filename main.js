// This is Common JS syntax:
const _ = require('lodash'); // Import the entire lodash module (i.e. Import lodash and assign it to a variable)
const { shuffle, reverse, without, range, sampleSize } = _; // Destructure the needed functions from _

// Now you can use shuffle, reverse, without, range, and sampleSize
// and still access the full lodash module through `_`
// Note that you could have called the full lodash module whatever you wanted (i.e. _ could have been anything)

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