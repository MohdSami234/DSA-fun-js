 
 var intersect = function(nums1, nums2) {
    let res = [];
    for (var i = 0; i < nums2.length; i++){
        if (nums1.includes(nums2[i])){
            res.push(nums2[i]);
            nums1.splice(nums1.indexOf(nums2[i]), 1);
        }
    }
    return res;
};

let num1= [1,9,5];
let num2 =[9,4,9,8,4];


console.log(intersect(num1,num2));