/** @format */

// recursive call = 재귀함수
function countdown(n) {
  for (var i = n; i >= 0; i--) console.log(i);
}
countdown(10);

function countdown1(n) {
  if (n < 0) return;
  console.log(n);
  countdown1(n - 1);
}
countdown1(10);

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(0)); // 0! = 1
console.log(factorial(1)); // 0! = 1
console.log(factorial(2)); // 2! = 2 * 1 = 2
console.log(factorial(3)); // 3! = 3 * 2 * 1 = 6
console.log(factorial(4)); // 4! = 4 * 3 * 2 * 1 = 24
console.log(factorial(5)); // 5! = 5 * 4 * 3 * 2 * 1 = 120

// 재귀함수는 자신을 무한 재귀 호출하기때문에 반드시 재귀 호출을 멈출 수 있는 탈출 조건을 만들어야한다. 탈출 조건이 없으면 무한 호출되어 stack overflow 에러가 발생한다.

function factorial1(n) {
  if (n <= 1) return 1;

  var num = n;
  while (--n) num *= n;
  return num;
}

console.log(factorial1(5));

// nested function or inner function & outer function

function outer() {
  var x = 1;

  // nested function
  function inner() {
    var y = 2;
    // you can call outer's variable
    console.log(x + y); // 3
  }
  inner();
}

outer();

// very very important callback function!!

function repeat(n) {
  for (var i = 0; i < n; i++) console.log(i);
}
repeat(5);

function repeatX(x) {
  for (var i = 0; i < x; i++) {
    if (i % 2) console.log(i); // 0 = false 1 = true 이기 떄문에 홀수일때만 출력됨
  }
}
repeatX(4);
repeatX(5);

// more flexible callback function
console.log('-------------------');

function repeatApp(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}

var logAll = function (i) {
  console.log(i);
};

// logAll함수를 총 5번 불러온다
repeatApp(5, logAll);

var logOdds = function (i) {
  if (i % 2) console.log(i);
};
// 반복 호출할 함수를 인수로 전달한다.
repeatApp(5, logOdds);

// 콜백함수가 고차 함수 내부에만 호출된다면 콜백 함수를 익명 함수 리터럴로 정의하면서 곧바로 고차 함수에 전달하는 것이 일반적이다. 하지만 콜백함수를 다른 곳에서도 호출할 필요가 있거나, 콜백함수를 전달받는 함수가 자주 호출된다면 위와 같이 외부에서 콜백함수를 정의한 후 함수 참조를 고차함수에 전달하는 편이 효율적이다.

repeatApp(5, function (i) {
  if (i % 2) console.log(i);
});

// 콜백함수는 함수형 프로그래밍 패러다임뿐만 아니라 비동기 처리 (이벤트처리, Ajax통신, 타이머 함수 등)에 활용되는 중요한 패턴이다.

// 버튼을 클릭하면 콜백함수가 실행됨
// document.getElementById('mybutton').addEventListener('click', function () {
//   console.log('button clicked');
// });

// 콜백함수를 사용한 비동기 처리
// 1초 후에 메세지를 출력한다
setTimeout(function () {
  console.log('1초 경과');
}, 1000);

// 콜백 함수는 비동기 처리뿐 아니라 배열 고차 함수에서도 사용된다. 자바스크립트에서 배열은 사용 빈도가 아주 높은 자료구조이고 배열을 다룰 때 배열 고차 함수는 매우 중요.

var Arr = [1, 2, 3].map(function (item) {
  return item * 2;
});
console.log(Arr);

Arr = [1, 2, 3].filter(function (item) {
  return item % 2;
});
console.log(Arr);

Arr = [1, 2, 3].reduce(function (acc, cur) {
  return acc + cur;
}, 0);
console.log(Arr);

// pure function
var count = 0;
function increase(n) {
  return ++n;
}

count = increase(count);
console.log(count);
count = increase(count);
console.log(count);

// impure function

var count1 = 0;
function increase1(n) {
  return ++count1;
}

increase1();
console.log(count1);
increase1();
console.log(count1);

// 함수형 프로그래밍은 순수 함수와 보조 함수의 조합을 통해 외부 상태를 변경하는 부수 효과를 최소화해서 불변성을 지향하는 프로그래밍 패러다임이다. 즉 로직  내에 존재하는 조건문과 반복문을 제거해서 복잡성을 해결하며, 변수사용을 억제하거나 생명 주기를 최소화해서 상태 변경을 피해 오류를 최소화하는 것을 목표로 한다.
