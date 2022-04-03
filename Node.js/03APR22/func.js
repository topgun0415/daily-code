/** @format */

const { odd, even } = require('./var');

function checkOddorEven(num) {
  if (num & 2) {
    return even;
  } else {
    return odd;
  }
}

module.exports = checkOddorEven; // module.exports 는 단 한번 밖에 선언 못함
