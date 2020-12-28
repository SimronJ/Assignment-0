function countOfAllIndexMatchingNumbers(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if(i === nums[i])
    {
      count++;
    }
  }

  return count;
}
console.log(countOfAllIndexMatchingNumbers([0,2,3,4,4,5,77]));
// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;