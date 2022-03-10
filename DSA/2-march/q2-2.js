//sorting od color//
function sortcolors(nums) {
    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    let low = 0;
    let high = nums.length - 1;
    let mid = 0;

    while (mid <= high) {
    const n = nums[mid];

      if (n === 0) {
        swap(mid, low);
        low++;
        mid++;
      } else if (n === 2) {
        swap(mid, high);
        high--;
      } else {
        mid++;
      }
    }
};

let nums = [2,0,2,1,1,0];
sortcolors(nums);