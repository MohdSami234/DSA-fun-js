let max=(array)=> {
    if (array.length === 1) {  // base case
        return array[0]
   } else {  
       return Math.max(array.shift(), max(array)) //rec case
   }
  }

  let min=(array)=> {
    if (array.length === 1) {  //base case
        return array[0]
   } else {  
       return Math.min(array.shift(), min(array)) //rec case
   }
  }  

console.log(max([1,-1,0,2,-2,3,-3,4,-4]))
console.log(min([1,-1,0,2,-2,3,-3,4,-4]))