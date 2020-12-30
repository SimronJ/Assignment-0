function setUnionOfAnyAmountOfSets(...args) {
 
  let setarr = new Set();
  let array = [];

  for (let i = 0; i < args.length; i++) {
    array.push(arguments[i]);
  }

  for (let i = 0; i < array.length; i++) {
    for(let e of array[i])
    {
      setarr.add(e);
    }
  }

  return setarr;
}
//console.log(setUnionOfAnyAmountOfSets(Set [ 1, 2, 4 ],  [4, 5, 6 ], Set[6, 7, 8 ]));
// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;