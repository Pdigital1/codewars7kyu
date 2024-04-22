//Implement a function that returns the minimal and the maximal value of a list (in this order).


function getMinMax(arr){
    const wow = arr.sort((a,b)=> a-b)
    return [wow[0], wow[wow.length-1]]
  };