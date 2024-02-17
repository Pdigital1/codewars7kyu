// DESCRIPTION:
// You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

// You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

// C.....m returns 'Escaped!' <-- more than three characters between

// C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.

// FUNDAMENTALSSTRINGS

function catMouse(x) {
    let wow = x.substring(1, x.length - 1)
    if (wow.length <= 3) {
        return "Caught!"
    } else return "Escaped!"
}
// DESCRIPTION:
// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.
function squares(x, n) {
    let wow = []
    if (n === 0 || n < 0) {
        return wow
    } for (let i = x; wow.length < n; i *= i) {
        wow.push(i)
    }
    return wow
}



// // If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice as strong as love :-)

// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

// The input will always be made of only lowercase letters and will never be empty.

function wordsToMarks(str)
{
  var sum = 0;
  for (let i = 0; i < str.length; i++)
    sum += str.charCodeAt(i) - 96;
  return sum;
}

  // Have you heard about the myth that if you fold a paper enough times, you can reach the moon with it? Sure you have, but exactly how many? Maybe it's time to write a program to figure it out.

  // You know that a piece of paper has a thickness of 0.0001m. Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.
  // (If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)
  
  // Note: Of course you can't do half a fold. You should know what this means ;P
  
  // Also, if somebody is giving you a negative distance, it's clearly bogus and you should yell at them by returning null (or whatever equivalent in your language). In Shell please return None. In C and COBOL please return -1.

  function foldTo(distance) {
    let paper = 0.0001;
    let folds = 0;
    if (distance == 0) {
      return 0;
    }else if(distance < 0){
      return null
    } else {
      while ( distance > paper ) {
        paper *= 2;
        folds += 1;
      }
    }
    return folds;
  }