// time complexity O(n^2)
const containsDuplicate = (nums) => {
  if (nums.length === 1) return false;
  let duplicated = false;
  let pureArr = [];
  for (let i = 0; i < nums.length; i++) {
    pureArr.includes(nums[i]) ? (duplicated = true) : pureArr.push(nums[i]);
  }

  return duplicated;
};

containsDuplicate([0, 4, 5, 0, 3, 6]);
