function myMap(inputArray, callback) {
  let output = [];

  for(let i = 0; i < inputArray.length; i++){
    output = [...output, callback(inputArray[i])];
  }
  // output = inputArray.map((ele) => callback(ele));
  
  return output;
}

module.exports = myMap;