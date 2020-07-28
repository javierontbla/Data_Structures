// given a key rotate the arr the position the key has
const rotate = (nums, k) => {
  for (k; k > 0; k--) {
    nums.unshift(nums[nums.length - 1]);
    nums.pop();
  }
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
