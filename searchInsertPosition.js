const searchInsert = (nums, target) => {
  // check if target is already in the arr
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
  }
  // if not, push the value and then sort it
  nums.push(target);
  // finally get the indexOf the target value in the new arr
  return nums.sort((a, b) => a - b).indexOf(target);
};

console.log(searchInsert([3, 5, 7, 9, 10], 8));
