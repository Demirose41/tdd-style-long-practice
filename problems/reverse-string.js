module.exports = function reverseString(string) {
  if(typeof string === "string"){
    return string.split('').reverse().join('');
  } else {
    throw new TypeError('Can only reverse a string');
  }
};