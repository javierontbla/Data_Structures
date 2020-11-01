const maxSubArray = (nums) => {
  let currentSum = nums[0];
  let maxSum = currentSum;

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], nums[i] + currentSum);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
};

// using Kadane's Algorithm
