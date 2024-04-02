// In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!

// The result should be a string of numbers, separated by comma and space.

function arithmeticSequenceElements(a,d,n) {
    var ret = [a]
    while (--n) ret.push(a+=d);
    return ret.join(', ')
  }