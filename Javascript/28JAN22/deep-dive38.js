/** @format */

// RegExp (정규표현식) : 정규표현식은 일정한 패턴을 가진 문자열의 집합을 표현하기 위해 사용하는 형식 언어다. 정규 표현식은 자바스크립트의 고유 문법이 아니며 대부분 프로그래밍 언어와 코드 에디터에 내장되어 있다.

const tel = '010-1234-567팔';
const regExp = /^\d{3}-\d{4}-\d{4}$/;

console.log(regExp.test(tel)); // false

// 정규 표현식의 생성 : 정규표현식 객체를 생성하기 위해서는 정규 표현식 리터럴과 RegExp 생성자 함수를 사용할 수 있다.

const target = 'Is this all there is?';
// 패턴 : is
// 플래그 : i => 대소문자를 구별하지 않고 검색한다
const regexp = /is/i;
// test 메서드는 target 문자열에 대해 정규 표현식 regexp의 패턴을 검색하여 매칭 결과를 불리언 값으로 반환한다.
console.log(regexp.test(target)); // true

// 뿐만 아니라 new RegExp 생성자 함수를 사용하여 객체를 생성할 수도 있다.

// RegExp 대표 메서드

// * RegExp.prototype.exec : exec 메서드는 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 배열로 반환한다. 매칭 결과가 없는 경우 null을 반환한다.
const targetExec = 'Is this all there is?';
const regExec = /is/;

console.log(regExec.exec(targetExec)); // [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]

// * RegExp.prototype.test : test 메서드는 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 불리언 값으로 반환한다.
const targetTest = 'Is this all there is?';
const regTest = /is/;

console.log(regTest.test(targetTest)); // true

// * String.prototype.match : String 표준 빌트인 객체가 제공하는 match 메서드는 대상 문자열과 인수로 전달받은 정규 표현식과의 매칭 결과를 배열로 반환한다.
const targetMatch = 'Is this all there is?';
const regMatch = /is/;
const regMatchs = /is/g;

console.log(targetMatch.match(regMatch)); // [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]
console.log(targetMatch.match(regMatchs)); // [ 'is', 'is' ]

// [ 플래그 : 패턴과 함께 정규 표현식을 구성하는 플래그는 정규 표현식의 검색 방식을 설정하기 위해 사용한다. ]
const targetFlag = 'Is this all there is?';

// targetFlag 문자열에서 is 문자열을 대소문자를 구별하여 한 번만 검색한다.
console.log(targetFlag.match(/is/)); // [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]
// targetFlag 문자열에서 is 문자열을 대소문자를 구별하지 않고 한 번만 검색한다.
console.log(targetFlag.match(/is/i)); // [ 'Is', index: 0, input: 'Is this all there is?', groups: undefined ]
// targetFlag 문자열에서 is 문자열을 대소문자를 구별하여 전역 검색한다.
console.log(targetFlag.match(/is/g)); // [ 'is', 'is' ]
// targetFlag 문자열에서 is 문자열을 대소문자를 구별하지 않고 전역 검색한다.
console.log(targetFlag.match(/is/gi)); // [ 'Is', 'is', 'is' ]

// [ 패턴 : 정규표현식은 일정한 규칙(패턴)을 가진 문자열의 집합을 표현하기 위해 사용하는 형식 언어다. ]

// * 문자열 검색 : 정규 표현식의 패턴에 문자 또는 문자열을 지정하면 검색 대상 문자열에서 패턴으로 지정한 문자 또는 문자열을 검색한다.
const targetPattern = 'Is this all there is?';
const regPattern = /is/;

console.log(regPattern.test(targetPattern)); // true
console.log(targetPattern.match(regPattern)); // [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]

// * 임의의 문자열 검색 : .은 임의의 문자 한 개를 의미한다. 문자의 내용은 무엇이든 상관없다.

const targetRandom = 'Is this all there is?';
const regRandom = /.../g;
console.log(targetRandom.match(regRandom));
// [
//   'Is ', 'thi',
//   's a', 'll ',
//   'the', 're ',
//   'is?'
// ]

// * 반복검색 : {m,n}은 앞선 패턴이 최소 m번, 최대 n번 반복되는 문자열을 의미한다

const targetSearch = 'A AA B BB Aa Bb AAA';
const regSearch = /A{1,2}/g;
const regSearch1 = /A{2}/g;
const regSearch2 = /A{2,}/g;

console.log(targetSearch.match(regSearch)); // [ 'A', 'AA', 'A', 'AA', 'A' ]
console.log(targetSearch.match(regSearch1)); // [ 'AA', 'AA' ]
console.log(targetSearch.match(regSearch2)); // [ 'AA', 'AAA' ]

// * OR 검색 : | 은 or의 의미를 갖는다.

const targetOR = 'A AA B BB Aa Bb AAA';
const regOR = /A|B/g;
const regOR1 = /A+|B+/g;

console.log(targetOR.match(regOR));
// [
//   'A', 'A', 'A', 'B',
//   'B', 'B', 'A', 'B',
//   'A', 'A', 'A'
// ]
console.log(targetOR.match(regOR1));
// [
//   'A',   'AA',
//   'B',   'BB',
//   'A',   'B',
//   'AAA'
// ]

// 분해되지 않은 단어 레벨로 검색하기 위해서는 +를 함께 사용한다.

const targetPlus = 'A AA B BB Aa Bb AAA';
const regPlus = /A+|B+/g;

console.log(targetPlus.match(regPlus));
// [
//   'A',   'AA',
//   'B',   'BB',
//   'A',   'B',
//   'AAA'
// ]

// [] 내의 문자는 or로 동작한다. 그 뒤에 +를 사용하면 앞선 패턴을 한 번 이상 반복한다.
const regPlus2 = /[AB]+/g;
// 범위를 지정하려면 [] 내에 -를 사용한다. 다음 예제의 경우 대문자 알파벳을 검색한다
const regRestict = /[A-Z]+/g;
// 대소문자를 구별하지 않고 알파벳을 검색하는 방법
const regRestict2 = /[a-zA-Z]+/g;
// 숫자를 검색하는 방법은 다음과 같다
const targetNumber = /[0-9]+/g;
// 숫자를 검색하는 다른 표현방법도 있다. 즉 \d는 [0-9]와 같다. /D는 /d와 반대로 동작한다 즉 \D는 숫자가 아닌 문자를 의미한다
const targetNumber1 = /[\d,]+/g;
const targetString = /[\D,]+/g; // 숫자를 제외한 문자열만

// Not 검색 : [...] 내의 ^은 not의 의미를 갖는다. 예를 들어 [^0-9]는 숫자를 제외한 문자를 의미한다.
const targetNot = 'AA BB 12 Aa Bb';
const regNot = /[^0-9]+/g;

console.log(targetNot.match(regNot)); // [ 'AA BB ', ' Aa Bb' ]

// 시작 위치로 검색 : [...] 밖의 ^은 문자열의 시작을 의미한다. 단 [...] 내의 ^은 not의 의미를 가지므로 주의하기 바란다.
const targetStart = 'https://poiemaweb.com';
const targetStartReverse = 'Https://poiemaweb.com';
const regStart = /^https/;

// 마지막 위치로 검색 : $는 문자열의 마지막을 의미한다.
const regFinish = /com$/;

console.log(regStart.test(targetStart)); // true (https로 시작)
console.log(regStart.test(targetStartReverse)); // false (Https로 시작)

console.log(regFinish.test(targetStart)); // true // (com로 끝남)

// 하나 이상의 공백으로 시작하는지 검사 : \s는 여러가지 공백 문자

const targetSpace = ' Hi!';
console.log(/^[\s]+/.test(targetSpace)); // true

// /^[A-Z|0-9]{4,10}$/  => 알파벳 대소문자 또는 숫자로 시작하고 끝나며 4~10자리인지 검사한다.
// /^\d{3}-\d{3,4}-\d{4}$/ => 핸드폰 번호 형식에 맞는지 검사
// /^[0-9A-Z]([-_\.]?[0-9A-Z])*@[0-9A-Z]([-_\.]?[0-9A-Z])*\.[A-Z]{2,6}$/i => 이메일 주소 형식에 맞는지 검사
