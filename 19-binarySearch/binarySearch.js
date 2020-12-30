class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let middle;
    let bool = false;

    while(left <= right)
    {
       middle = Math.floor((left + right)/ 2);

      if(nums[middle] === target)
      {
        bool = true;
      }

      if(nums[middle] < target)
      {
        left = middle + 1;
      }
      else
      {
        right = middle - 1;
      }
    }
    return bool;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;