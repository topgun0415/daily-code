/** @format */

// Javascript 기본 문법

// CallStack

function first() {
  second();
  console.log('first');
}

function second() {
  third();
  console.log('second');
}

function third() {
  console.log('third');
}

first();

/*
anonymous
third
seocnd
first
*/

// Event Loop

// first Example

function run() {
  console.log('3seocnd later');
}
console.log('start');
setTimeout(run, 3000);
console.log('end');

/*
start
end
3second later
*/

// second Exmaple

function oneMore() {
  console.log('onemore');
}
function runAgain() {
  console.log('run run');
  setTimeout(() => {
    console.log('wow');
  }, 0);
  new Promise((resolve) => {
    resolve('hi');
  }).then(console.log);
  oneMore();
}

setTimeout(runAgain, 5000);

/*
(5s later)
anonymous
run run
one more 
hi (Mirco Task Queue)
wow (Task Queue)
*/

// 1. let , const, var (가장 큰 차이점은 scope, var은 함수 스코프)

if (true) {
  var x = 2;
}
console.log(x);

if (true) {
  const y = 2;
}
// console.log(y); ReferenceError

// 2. Template literal

var won = 1000;
var result = `이 과자는 ${won}원 입니다.`;
console.log(result);

// 3. Arrow function

function add1(x, y) {
  return x + y;
}
const add2 = (x, y) => {};

const add3 = (x, y) => x + y;
const add4 = (x, y) => x + y;

function not1(x) {
  return !x;
}
const not2 = (x) => !x;

const obj = (x, y) => ({ x, y });
console.log(obj(1, 2));

// addEventListener 에서 function으로 콜백함수를 넣으면 this는 해당 이벤트가 발생하는 것을 가르키지만 Arrow function은 this 바인드가 없기 때문에 window를 가리키게 된다.

// 4. destructuring assign

const example = { a: 123, b: { c: 135, d: 146 } };
const aa = example.a; // 123
const aaa = example.b.c; // 135
console.log(aa);
console.log(aaa);

const {
  a,
  b: { c },
} = example;

console.log(a); // 123
console.log(c); // 135

arr = [1, 2, 3, 4, 5];
const [x1, y1, , , z1] = arr;

console.log(x1, y1, z1); // 1,2,5

// 5. Class

// Class 객체 선언은 생성자 함수의 문법적 설탕이나 둘은 거의 비슷함 다만 클래스 객체를 선언할때 new를 붙이지 않으면 오류가 발생

// 6. Promise

// 프로미스 : 내용이 실행되었지만 결과를 아직 반환하지 않은 객체
// then을 붙이면 결과를 반환함
// 실행이 완료되지 않았으면 완료된 후에 Then 내부 함수가 실행

// Resolve : 성공 리턴값 -> then으로 연결
// Reject : 실패 리턴값 -> catch로 연결
// Finally 부분은 무조건 실행됨

// Frontend Javascript

// 1. Ajax : 서버로 요청을 보내는 코드
// 라이브러리 없이는 브라우저가 지원하는 XMLHttpRequest 이용
// Ajax 요청 시 Axios 라이브러리를 사용하는게 편함
// Html에 아래 스크립트를 추가하면 쓸 수 있음
// GET & POST

// 2. FormData : HTML Form 태그에 담긴 데이터를 Ajax 요청으로 보내고 싶은 경우

// 3. encordURIComponent, decodeURIComponent : 가끔 주소창에 한글 입력하면 서버가 처리하지 못하는 경우 발생

// 4. data attribute와 dataset : HTML 태그에 데이터를 저장하는 방법 (공개된것만)
