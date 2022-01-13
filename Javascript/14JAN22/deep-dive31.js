/** @format */

// arguments : 화살표 함수는 함수 자체의 arguments 바인딩을 갖지 않는다. 따라서 화살표 함수 내부에서 arguments를 참조하면 this와 마찬가지로 상위 스코프의 arguments를 참조한다.

(function () {
  // 화살표 함수 foo의 arguments는 상위 스코프인 즉시 실행 함수의 arguments를 가리킨다.
  const foo = () => console.log(arguments);
  foo(3, 4);
})(1, 2);

// 화살표 함수 foo의 arguments는 상위 스코프인 전역의 arguments를 가리킨다.
// 하지만 전역에는 arguments 객체가 존재하지 않는다. arguments 객체는 함수 내부에서만 유효하다.

// arguments 객체는 함수를 정의할 때 매개변수의 개수를 확정할 수 없는 가변 인자 함수를 구현할 때 유용하다. 하지만 화살표 함수에서는 arguments 객체를 사용할 수 없다.

// Rest 파라미터
// 기본문법 : Rest 파라미터(나머지 매개변수)는 매개변수 이름 앞에 세개의 점 ...을 붙여서 정의한 매개변수를 의미한다. Rest 파라미터는 함수에 전달된 인수들의 목록을 배열로 전달받는다.

function rest(...rest) {
  // 매개변수 rest는 인수들의 목록을 배열로 전달받는 Rest 파라미터다.
  console.log(rest); // [ 1, 2, 3, '4' ]
  console.log(typeof rest[0]); // number
  console.log(typeof rest[3]); // string
}
rest(1, 2, 3, '4');

// 일반 매개변수와 달리 Rest 파라미터는 함께 사용할 수 있다. 이때 함수에 전달된 인수들은 매개변수와 Rest 파라미터에 순차적으로 할당된다.

function rest1(param, ...rest) {
  console.log(param); // 1
  console.log(rest); // [ 2, 3, 4, 5 ]
}
rest1(1, 2, 3, 4, 5);

function rest2(param1, param2, param3, ...rest) {
  console.log(param1); // 1
  console.log(param2); // 2
  console.log(param3); // 3
  console.log(rest); // [ 4, 5 ]
}
rest2(1, 2, 3, 4, 5);

// 파라미터에 들어오는걸 할당한 후 맨 마지막에 rest에 넘겨지는거라 무조건 파라미터값 맨 뒤에다가 ...rest를 적어줘야함
// rest 파라미터는 단 하나만 선언 가능
// Rest 파라미터는 함수 정의 시 선언한 매개변수 개수를 나타내는 함수 객체의 length 프로퍼티에 영향을 주지 않는다.

function foo1(...rest) {}
console.log(foo1.length); // 0
function foo2(f, ...rest) {}
console.log(foo2.length); // 1
function foo3(x, y, ...rest) {}
console.log(foo3.length); // 2

// Rest 파라미터와 arguments 객체
// ES5에서는 함수를 정의할 때 매개변수의 개수를 확정할 수 없는 가변 인자 함수의 경우 매개변수를 통해 인수를 전달받는 것이 불가능하므로 arguments 객체를 활용하여 인수를 전달받았다. arguments 객체는 함수 호출 시 전달된 인수들의 정보를 담고 있는 수회 가능한 유사 배열 객체이며, 함수 내부에서 지역 변수처럼 사용할 수 있었다. 하지만!! 객체는 배열이 아닌 유사 배열 객체이므로 배열 메서드를 사용하려면 function.prototype.call, apply 메서드를 사용해 객체를 배열로 변환해야 하는 번거로움이 있었다.

function sum() {
  // 유사 배열 객체인 arguments 객체를 배열로 변환했다.
  var array = Array.prototype.slice.call(arguments);

  return array.reduce(function (pre, cur) {
    return pre + cur;
  }, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// ES6에서는 rest 파라미터를 사용하여 가변 인자 함수의 인수 목록을 배열로 직접 전달받을 수 있다. 이를 통해 유사 배열 객체인 arguments 객체를 배열로 변환하는 번거로움을 피할 수 있다.

function sum1(...args) {
  // Rest 파라미터 args에는 배열 [1,2,3,4,5]가 할당된다.
  return args.reduce((pre, cur) => pre + cur, 0);
}
console.log(sum1(1, 2, 3, 4, 5)); // 15

// 함수와 ES6 메서드는 Rest 파라미터와 arguments 객체를 모두 사용 할 수 있다. 하지만 화살표 함수는 함수 자체의 arguments 객체를 갖지 않는다. 따라서 화살표 함수로 가면 인자 함수를 구현해야 할때는 반드시 Rest 파라미터를 사용해야한다.
