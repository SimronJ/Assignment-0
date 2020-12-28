function countOfAllBooleans(arr) {
  count = 0;

  for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i] === "boolean")
    {
      count++;
    }
  }

  return count;
}

console.log(countOfAllBooleans(["hello", "world", 3, "nice", 99, Infinity, -Infinity, true, true, true, false]));
// Do not edit this line;
module.exports = countOfAllBooleans;