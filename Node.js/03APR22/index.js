/** @format */

const { odd, even } = require('./var'); // 구조분해할당으로 정확히 이름이 일치해야함
const checkNumber = require('./func'); // 하지만 원래 모듈을 불러오는 것에는 굳이 변수 이름을 맞춰줄 필요가 없다

function checkStringNumber(str) {
  if (str.length % 2) {
    return even;
  } else {
    return odd;
  }
}

console.log(checkNumber(2));
console.log(checkStringNumber('Hellos'));
