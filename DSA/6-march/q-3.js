//print even//

let recurEven=(n)=>{
    if(n<0){           //base case
        return
    }else{
        if(n%2===0){           //rec case
            console.log(n)
            recurEven(n-2)
        }else{
            recurEven(n-1)
        }
    }
}

let n =23
recurEven(n);