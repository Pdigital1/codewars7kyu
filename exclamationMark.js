// Description:
// Count the number of exclamation marks and question marks, return the product.

// Examples
// ""          --->   0
// "!"         --->   0
// "!ab? ?"    --->   2
// "!!"        --->   0
// "!??"       --->   2
// "!???"      --->   3
// "!!!??"     --->   6
// "!!!???"    --->   9
// "!???!!"    --->   9
// "!????!!!?" --->  20

function product (string) {
    var wow = 0;
    var pow = 0;
    
    string.split('').forEach(function(pointMark){
      if(pointMark === '!'){
        wow +=1
      }
      if(pointMark === '?'){
        pow +=1
      }
      if(pointMark === ''){
        return 0
      }
    });
    return wow * pow
  }

console.log(product('??!!'))
console.log(product('?!'))