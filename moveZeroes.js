// given an array nums, write a function to move all 0's to the end of it
// while maintaining the relative order of the non-zero elements.

// brute force
const moveZeroes = (nums) => {
  const zeroes = nums.filter((num) => num === 0);
  const noZeroes = nums.filter((num) => num !== 0);
  zeroes.map((zero) => noZeroes.push(zero));
  nums = noZeroes;
  return nums;
};

// leetcode approach #1, this has better memory usage, but slower
const moveZeroes = (nums) => {
  nums.forEach((num) => {
    let index = nums.indexOf(num);
    if (num === 0) {
      nums.splice(index, 1);
      nums.push(num);
    }
  });
  return nums;
};

// this is faster (time complexity) leetcode approach #2
const moveZeroes = (nums) => {
  let indx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[indx] = nums[i];
      indx++;
    }
  }
  for (let j = indx; j < nums.length; j++) {
    nums[j] = 0;
  }
};

moveZeroes([0, 1, 0, 3, 12]);
