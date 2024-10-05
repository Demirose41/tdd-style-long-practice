function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if( n < 1000000 && n > 1){
    return 1.0/n;
  } else {
    throw new TypeError('N must be between 1 and 1000000');
  }
}

module.exports = {
  returnsThree,
  reciprocal
};