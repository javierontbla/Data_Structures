// remove duplicates modyfing the existing array

const removeDuplicates = (nums) => {
  let noDuplicates = {};

  for (let i = 0; i < nums.length; i++) {
    if (noDuplicates[nums[i]] === true) {
      nums.splice(i, 1);
      i -= 1;
    }
    noDuplicates[nums[i]] = true;
  }
  return nums.length;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
