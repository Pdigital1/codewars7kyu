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



  //   My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

//   In honor of my grandfather's memory we will write a function using his formula!
  
//   Take a list of ages when each of your great-grandparent died.
//   Multiply each number by itself.
//   Add them all together.
//   Take the square root of the result.
//   Divide by two.
//   Example
//   predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
//   Note: the result should be rounded down to the nearest integer.
  
//   Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.


  function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let wow = (age1*age1)+(age2*age2)+(age3*age3)+(age4*age4)+(age5*age5)+(age6*age6)+(age7*age7)+(age8*age8)
    return Math.floor(Math.sqrt(wow)/2)
  }


//   Create a function add(n)/Add(n) which returns a function that always adds n to any number

//   Note for Java: the return type and methods have not been provided to make it a bit more challenging.
  
//   var addOne = add(1);
//   addOne(3); // 4
  
//   var addThree = add(3);
//   addThree(3); // 6

const add = n => x => n + x

// DESCRIPTION:
// Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).

// Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.

// Notes:
// return an empty array if your array is empty
// arrays will only contain numbers so don't worry about checking that
// Examples:
// [1, 2, 3]  -->  [2, 4, 6]   #  [1+1, 2+2, 3+3]

// [4, 6, 9, 1, 3]  -->  [5, 8, 2, 5, 8]  #  [4+1, 6+2, 9+3, 1+4, 3+5]
//                                        #  9+3 = 12  -->  2



function incrementer(nums) { 
  return nums == [] ? [] : nums.map((x,i)=> (x+(i+1))%10)
  //mod 10 will always give you a the last number of a number > than 2 digits 
}

// Currying functions: multiply all elements in an array
// To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

// The returned array should consist of each of the elements from the first array multiplied by the integer.

// Example:

// multiplyAll([1, 2, 3])(2) = [2, 4, 6];
// You must not mutate the original array.

// Here's a nice Youtube video about currying, which might help you if this is new to you.

const multiplyAll = arr => n => arr.map(x => x*n)