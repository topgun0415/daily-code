/** @format */

// 함수

// 함수 선언에는 3가지 방법이 있습니다.
function a() {} // 함수를 상수에 대입하지 않고 function 키워드 뒤에 함수 이름을 넣는 방식을 함수 선언문
const b = function () {}; // 함수 b와 같이 상수나 변수에 대입하는 방식을 함수 표현식
const c = () => {}; // 화살표 함수

function ab() {}
ab();

// return 이해하기

function abc() {}
// undefined
abc();
// undefined

// return 을 명확히 제시해주지않으면 undefined를 return 해주는거랑 마찬가지임

function aa(parameter) {
  console.log(parameter);
}
aa('argument');

function abb(w, x, y, z) {
  console.log(w, x, y, z);
}
abb('hello', 'parameter', 'argument'); // hello parameter argument undefined

// 반대로 argument가 많으면 무시된다

function abbb(x, w) {
  console.log(x, w);
}
abbb('coffee', 'drink', 'beer'); // coffee drink

const multiply = (x, y, z) => {
  return console.log(x * y * z);
};
multiply(1, 2);

// 배열과 객체가 다른것은 속성의 이름과 값들이 붙어져있음.

const obj = {
  bc: 'hello',
  '2ca': 'hello',
  'c a': 'hello',
  'c-a': 'hello',
};

const zerolee = {
  name: '이성계',
  year: 1992,
  month: 4,
  date: 12,
  gender: 'M',
};

console.log(zerolee.name);
console.log(zerolee['year']); // 대괄호할때는 꼭 문자열로 감싸야한다
console.log(zerolee.who); // undefined

console.log(obj.bc);
console.log(obj['c a']);
// console.log(obj.2ca); SyntaxError: missing ) after argument list

// 객체 수정하기
zerolee.name = '성계리';
zerolee.who = 'Idontknow';
console.log(zerolee);

// 객체 제거하기
delete zerolee.gender;
console.log(zerolee); // { name: '성계리', year: 1992, month: 4, date: 12, who: 'Idontknow' }

// 배열과 함수가 객체인 이유 : 배열과 함수가 객체인 이유는 객체의 성질을 모두 다 사용할 수 있기 때문입니다. 배열과 함수에도 속성들을 추가하거나 수정 및 제거할 수도 있습니다. 왜냐하면 객체는 함수와 배열을 포함하는 개념이라서 {}를 사용해 만든 객체를 객체 리터럴이라고 부르는 겁니다.

function hello() {}
hello.a = 'really?';
const array1 = [];
array1.b = 'wow'; //
console.log(hello.a); // really?
console.log(array1); // [ b: 'wow' ]

// 다만 함수와 배열은 주로 객체 리터럴과는 다른 목적으로 쓰이는 경우로 만들어지기에 이 둘에게 임의 속성을 넣는 경우는 드물다. 처음부터 객체리터럴을 사용하지 함수와 배열을 사용할 이유는 없다.

// 객체 간 비교하기  : 객체를 다룰 때 실수를 가장 많이 하는 상황이 있다. 객체 사이에 비교 연산을 할때이다.
console.log({} === {}); // false
console.log(false === false); // true
console.log(null === null); // true

// 객체는 모양이 같아도 생성할 때마다 새로운 객체가 생성됩니다. 따라서 같은 객체인지 비교하려면 기존 객체를 변수에 저장해 두어야 합니다.
const p = { name: 'zerocho' };
const k = [1, 2, p];
console.log(p === k[2]); // true

// 1분 퀴즈 : 다음과 같이 객체 안에 있을 때 , '조' 값에 접근하는 방법은 무엇일까요?

const zerocho = {
  name: {
    first: '현영',
    last: '조',
  },
  gender: 'M',
};

console.log(zerocho.name.last);
