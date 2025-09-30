var triangularSum = function (nums) {
  while (nums.length > 1) {
    console.log(nums);
    nums = nums
      .map((e, i) => (e + nums[i + 1]) % 10)
      .filter((e) => +e || +e === 0);
  }
  return nums[0];
};

console.log(triangularSum([5]));
