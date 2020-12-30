function pairSum(nums, target) {

  if(nums.length <= 1)
  {
    throw "nums can't be 1 or lower";
  }
  else
  {
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        if (i !== j && nums[i] + nums[j] === target) {
          return true;
        }
      }
    }
  }

  return false;
}

// Do not edit this line;
module.exports = pairSum;