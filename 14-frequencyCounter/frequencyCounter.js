function frequencyCounter(word) {
  
  let wordarr = word.split('');
  let obj = {};
  for (let i = 0; i < wordarr.length; i++) {
    
    if(wordarr[i] in obj)
    {
      count = obj[wordarr[i]];
      obj[wordarr[i]] = ++count;
    }
    else
    {
      obj[wordarr[i]] = 1;
    }
    
  }

  return obj;
}
//console.log(frequencyCounter('simranjeet'));
// Do not edit this line;
module.exports = frequencyCounter;