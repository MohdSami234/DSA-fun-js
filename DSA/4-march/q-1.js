

//function for mean//
function Mean(a,n)
{
    let sum = 0;
    for (let i = 0; i < n; i++)
        sum += a[i];
 
    return sum / n;
}

//finction for median//
function Median(a,n)
{
    
    a.sort();
 
   
    if (n % 2 != 0)
        return a[n / 2];
 
    return (a[Math.floor((n-1)/2)] +
            a[n / 2]) / 2;
}
 

let a = [1, 3, 4, 2, 2, 5, 8, 6]
let n = a.length;
 

Mean(a,n);
Median(a,n);