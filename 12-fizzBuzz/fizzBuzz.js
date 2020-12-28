function fizzBuzz(start, end) {
  let fizzBuzzarray = [];

  for (let i = start; i <= end; i++) 
  {
    if(i % 3 == 0)
    {
      if(i % 5 == 0)
      {
        fizzBuzzarray.push("FizzBuzz");
      }
      else
      {
        fizzBuzzarray.push("Fizz");
      }
    }
    else if(i % 5 == 0)
    {
      fizzBuzzarray.push("Buzz");
    }
    else
    {
      fizzBuzzarray.push(i);
    }
  }

  return fizzBuzzarray;
}

// Do not edit this line;
module.exports = fizzBuzz;