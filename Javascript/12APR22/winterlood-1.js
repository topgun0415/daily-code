/** @format */

// 🎉 Course Start

// ✅ 변수

let age = 25;
console.log(age);

const age1 = 30;

/*
 _언더 스코어와 $달러는 변수명에 사용 가능
 숫자는 변수명 앞에 사용 불가능
 예약어는 변수명으로 사용 가능
 var는 ES6 이후로 비선호
 상수는 재선언 불가능
*/

// ✅ 형변환 Type Change

let numA = 13;
let numB = '2';
let result = numA + numB;

console.log(result, typeof result); // 132 , string
console.log(numA * numB, typeof (numA * numB)); // 26 , number

/*
Primitive Data Type 
- Number 
- String
- Null
- Undefined
- Symobol
- Boolean


Unprimitive Data Type 
- Object (Array, function ...)
*/

// ✅ 대입연산자
let a = 10;
let b = 15;

// 복합연산자
a += 5;
console.log(a); // 15

// 증감연산자
console.log(++a); // 16
console.log(a++); // 16
console.log(a); // 17

// 논리연산자
console.log(!true); // false
console.log(true && true); // true
console.log(true && false); // false
console.log(false || false); // false
console.log(false || true); // true

// null 병합연산자 : 변수가 null 혹은 undefined이면 default 값으로 x가 들어온다.
let c;
c = c ?? 5;

let d = 5;
d = d ?? 10;

console.log(c); // 5
console.log(d); // 5

// ✅ 조건문 Conditional

// if(condition) else
// else if(condition)
// switch(condtion) case / break

let country = 'ko';

switch (country) {
  case 'ko':
    console.log('Korea');
    break;

  case 'jp':
    console.log('Japan');
    break;

  case 'cn':
    console.log('China');
    break;

    defalut: console.log('Unknown');
    break;
}

//  ✅ 함수 ( 화살표 함수 & 함수선언문 ) Function

// 함수선언식
function getRect(width, height) {
  let area = width * height;
  return area;
}

let area = getRect(30, 40);
console.log(area); // 1200

// 함수표현식
let getRectArea = function (width, height) {};

// 화살표함수 (ES6)
const getArea = (width, height) => width * height;
let area1 = getArea(10, 20);
console.log(area1); // 200

//  ✅ 콜백함수 : 함수의 파라미터에 함수를 전달해주는 것

function checkMood(mood, goodMood, badMood) {
  if (mood === 'good') {
    goodMood();
  } else {
    badMood();
  }
}

const goodMood = function () {
  return console.log('😀');
};

const badMood = function () {
  return console.log('😭');
};

checkMood('bad', goodMood, badMood); // 😭

// ✅ 객체 Object

/* 선언방법
let person = {}
let person = new Object;
*/

let person = {
  name: 'Philip', // Member
  age: 29, // Member
  sex: 'Male', // Member
  sayHello: function () {
    console.log(`Hello my name is ${this.name}`);
  }, // Method
};

console.log(person.age);
console.log(person['name']);
console.log(`name : ${'name' in person}`); // true ( 'value' in Object )

// ⭐ delete person.sex; 삭제는 delete로 가능 다만 메모리상에는 지워지지 않기 때문에 해당 프로퍼티에 null을 대입해 지워줄 것

// ✅ 반복문 For
const arrEx = [1, 2, 3, 4, 5];

for (let i = 0; i < arrEx.length; i++) {
  console.log(arrEx[i]);
}

const objEx = {
  name: 'Philip',
  age: 29,
  sex: 'Male',
};

for (value in objEx) {
  console.log(value);
}

// ✅ 배열 Array

const arr = [1, 2, 3, 4, 5];

// forEach
arr.forEach((v) => {
  console.log(v);
});

// indexOf / includes / some

let num = 3;

console.log(arr.indexOf(num)); // 2
console.log(arr.includes(num)); // true
console.log(
  arr.some((v) => {
    if (v === 3) {
      return true;
    } else {
      return false;
    }
  })
);

// ⭐ 객체로 이루어진 배열을 순회하면서 찾으려고 한다면

const arrObj = [
  { color: 'red' },
  { color: 'green' },
  { color: 'white' },
  { color: 'gold' },
];

console.log(arrObj.findIndex((v) => v.color === 'green')); // 1
console.log(arrObj.findIndex((v) => v.color === 'gold')); // 3
console.log(arrObj.findIndex((v) => v.color === 'black')); // -1

const element = arrObj.find((v) => v.color === 'red');
console.log(element);
console.log(element.color); // red

// filter() : 배열에서 콜백함수 조건에 만족하는건 값을 배열로 리턴받을 수 있음

// Slice() : 자르기

// Sort() : 정렬

// Join() : 배열에 있는 것들 합치기

// Split() : 합친것을 띄우기
