// DESCRIPTION:
// Your task is to write function factorial.


function factorial(n){
    let sum = 1
    for(let i = 1; i <= n; i++){
      sum *= i
    }
    return sum
  }