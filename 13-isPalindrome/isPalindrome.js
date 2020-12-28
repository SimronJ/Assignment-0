function isPalindrome(word) {
  let istrue = true;

  let reverseword = word.split('').reverse().join('');
  if(word === reverseword)
  {
    istrue = true;
  }
  else
  {
    istrue = false;
  }

  // let reversewordarray = [];
  // for (let i = 0; i < wordarray.length; i++) {
  //   reversewordarray[i] = wordarray[wordarray.length - i - 1];
  // }

  // if(wordarray[0] === reversewordarray[0])
  // {
  //   istrue = true;
  // }
  // else
  // {
  //   istrue = false;
  // }

   return istrue;
}

//console.log(isPalindrome("racecar"));

// Do not edit this line;
module.exports = isPalindrome;