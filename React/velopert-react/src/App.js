/** @format */

// 문자열 타입으로 변환

// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
String(1);
String(NaN);
String(true); // boolean -> String

// 2. Object.prototype.toString 메서드를 사용하는 방법

(1).toString();
NaN.toString();
const type = true.toStrng();
