function sumOfMinimumAndMaximum(nums) {
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  return max + min;
}

console.log(sumOfMinimumAndMaximum([2,4,5,6,23]));
// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;