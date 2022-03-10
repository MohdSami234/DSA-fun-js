//finding index in array
function find_index(arr, n, target)
{
     
    
    for(let i = 0; i < n; i++)
    
        if (arr[i] == target)
            return i;
  
        else if (arr[i] > target)
            return i;
  
    return n;
}
 
let arr = [ 1, 3, 5, 6 ];
let n = arr.length;
let target = 9;
  
find_index(arr, n, target);