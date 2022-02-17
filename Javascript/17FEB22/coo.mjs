/** @format */

// 변수의 공개
const number = 7777;

// 함수의 공개
function minus(x) {
  return x - x;
}

// 클래스의 공개
class WhoamI {
  constructor(name) {
    this.name = name;
  }
}

export { number, minus, WhoamI };
