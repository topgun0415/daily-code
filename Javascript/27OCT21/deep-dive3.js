/** @format */

var x = 10;

var str = x.toString(); // 의도적 타입변환
console.log(typeof str, str);
console.log(typeof x, x);

var str1 = x + ''; // 암묵적 타입변환
console.log(typeof str1, str1);

//문자열 타입으로 변환

// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
String(1); // -> "1"
String(Nan); // -> "NaN"
String(true); // -> "true"

// 2. Object.Prototype.toString 메서드를 사용하는 방법

// 3.
