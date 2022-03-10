//binary search in string arrray//


function binarySearch(arr, target) {
    let l = 0;
    let u = arr.length - 1;
    

    while(l <= u) {
        let mid = Math.floor(l + (u - l)/2);
        
        if (arr[mid] === target) {
            return true;
        }
        if (arr[mid] < target) {
            l = mid + 1;
        } else {
            u = mid - 1;
        }
    }

    return false;
}
let array = ['a','b','d','e','f','g','h','i','x','z'];
binarySearch(array, 'z');