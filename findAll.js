
// Given an array (a list in Python) of integers and an integer n, find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.

// If n is not in the given array, return an empty array [].

// Assume that n and all values in the given array will always be integers.

// Example:

// findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]
const findAll = (array, n) => {
    let wow = []; array.forEach((e, i)=>{if(e===n) {wow.push(i)}})
  
  return wow}

findAll([6, 9, 3, 15, 9, 94, 3, 82, 15, 11, 16, 23, 17, 44], 44)