/** @format */

// String : 원시 타입인 문자열을 다룰 때 유용한 프로퍼티와 메서드를 제공

// String 생성자 함수 : new 연산자와 함께 호출하며 String 인스턴스 생성 가능
const strObj = new String('Lee');
console.log(strObj); // [String: 'Lee']

// String 생성자 함수의 인수로 문자열을 전달하면서 new 연산자와 함께 호출하면 [[StringData]] 내부 슬롯에 인수로 전달받은 문자열을 할당한 String 래퍼 객체를 생성한다.
// String {0: "L", 1: "e", 2: "e", length: 3, ...}
// String 래퍼 객체는 배열과 마찬가지로 length 프로퍼티와 인덱스를 나타내는 숫자 형식의 문자열을 프로퍼티 키로, 각 문자를 프로퍼티 값으로 갖는 유사 배열 객체이면서 이터러블이다.

let strObj2 = new String(123); // 인수로 문자열이 아닌 값을 전달하면 인수를 문자열로 강제 변환시킨 뒤 [[StringData]] 내부 슬롯에 변환된 문자열을 할당한 String 래퍼 객체 생성
console.log(strObj2);

// new를 붙이지 않고 String 생성자 함수만 사용하면 String 인스턴스가 아닌 문자열을 반환한다. 이를 명시적 타입 변환
console.log(String(1)); // 1
console.log(String(NaN)); // NaN

// String 래퍼 객체는 유사 배열 객체다.
console.log('Hello'.length); // 5

// String 메서드 : 배열에는 원본 배열을 직접 변경하는 메서드와 원본 배열을 직접 변경하지 않고 새로운 배열을 생성하여 반환하는 메서드가 있다. 하지만 String 객체의 메서드는 언제나 새로운 문자열을 반환함. 문자열은 변경 불가능한 원시값이기 때문에 String 래퍼 객체도 읽기 전용 객체로 제공된다.

// * String.prototype.indexOf : 인수로 전달받은 문자열을 검색하여 첫 번째 인덱스를 반환한다. 검색에 실패하면 -1을 반환함

const strIndex = 'Hello World';
console.log(strIndex.indexOf('o')); // 4
console.log(strIndex.indexOf('w')); // -1
console.log(strIndex.indexOf('W')); // 6
console.log(strIndex.indexOf('l', 5)); // 9 (두번째 인수에 들어온 숫자 index부터 찾는다)

// * Stirng.prototype.search : 인수로 전달받은 정규 표현식과 매치하는 문자열을 검색하여 일치하는 문자열 인덱스를 반환한다. 실패하면 -1

const strSearch = 'Hello World';
console.log(strSearch.search(/o/)); // 4
console.log(strSearch.search(/x/)); // -1

// * String.prototype.includes : 인수로 전달받은 문자열이 포함되어 있는지 확인하여 그 결과를 true 또는 false로 반환
const strIncludes = 'Hello World';
console.log(strIncludes.includes('Hello')); // true
console.log(strIncludes.includes('World')); // false
console.log(strIncludes.includes('world')); // true
console.log(strIncludes.includes('d', 1)); // true (1 번 인덱스부터 찾는다)

// * String.prototype.startsWith : 인수로 전달받은 문자열로 시작하는지 확인하여 그 결과를 true 또는 false로 반환한다.
const strStart = 'Hello World';
console.log(strStart.startsWith('H')); // true
console.log(strStart.startsWith('W')); // false
console.log(strStart.startsWith('', 5)); // true

// * String.prototype.endsWith : 인수로 전달받은 문자열이 전달받은 문자열로 끝나는지 확인하고 그 결과를 true 또는 false로 반환
const strEnd = 'Hello World';
console.log(strEnd.endsWith('d')); // true
console.log(strEnd.endsWith('l')); // false
console.log(strEnd.endsWith('lo', 5)); //true (두번째 인수로 검색할 문자열의 길이를 전달 가능)

// * String.prototype.charAt : 인수로 전달받은 인덱스에 위치한 문자를 검색하여 반환한다.
const strChar = 'Hello';
console.log(strChar.charAt(3)); // l
console.log(strChar.charAt(4)); // o

// * String.prototype.substring : 첫 번째 인수로 전달받은 인덱스에 위치하는 문자부터 두번째 인수로 전달받은 인덱스에 위치하는 문자의 바로 이전 문자까지 반환
const strSub = 'Hello World';

// 인덱스 1부터 인덱스 4 이전까지의 부분 문자열을 반환한다.
console.log(strSub.substring(1, 4)); // ell
// 두번째 인수는 생략가능
console.log(strSub.substring(3)); // lo World
// indexOf 메서드와 함께 사용하면 특정 문자열을 기준으로 앞뒤에 위치한 부분 문자열을 얻을 수 있다
console.log(strSub.substring(0, strSub.indexOf(' '))); // Hello (' '의 앞 문자열) * 무조건 빈 문자열이면 ' 띄우고 ' 해줘야함
console.log(strSub.substring(strSub.indexOf(' ') + 1, strSub.length)); // (6, strSub.length);
console.log(strSub.indexOf(' ')); // 5

// * String.prototype.slice : substring 메서드와 동일하게 작동. 다만 slice에서는 음수로도 사용 가능
const strSlice = 'Hello World';
console.log(strSlice.slice(0, 5)); // Hello
console.log(strSlice.slice(-5)); // World (뒤에서 5자리를 잘라내어 반환함)

// * String.prototype.toUpperCase : 대상 문자열을 모두 대문자로 변경한 문자열을 반환함
console.log('HelloWorld'.toUpperCase()); // HELLOWORLD
// * String.prototype.toLowerCase : 대상 문자열을 모두 소문자로 변경한 문자열을 반환함
console.log('HelloWorld'.toLowerCase()); // helloworld

// * String.prototype.trim : 문자열 앞뒤에 공백 문자가 있을 경우 이를 제거한 문자열을 반환한다.
const strTrim = '     foo      ';

console.log(strTrim.trim()); // 'foo'
console.log(strTrim.trimStart()); // 'foo     '
console.log(strTrim.trimEnd()); // '      foo'

// * String.prototype.replace 메서드에 정규 표현식을 인수로 전달하여 공백 문자를 제거할 수도 있다.
console.log('    foo     '.replace(/\s/g, '')); // foo
'    foo     '.replace(/^\s+/g, ''); // 'foo     '
'    foo     '.replace(/\s+$/g, ''); // '      foo'

// * String.prototype.repeat : 대상 문자열을 인수로 전달받은 정수만큼 반복해 연결한 새로운 문자열을 반환한다.
const strRepeat = 'abc';

console.log(strRepeat.repeat(0)); //
console.log(strRepeat.repeat(1)); // abc
console.log(strRepeat.repeat(2)); // abcabc
console.log(strRepeat.repeat(2.5)); // abcabc
// console.log(strRepeat.repeat(-1)); Error

//  * String.prototype.replace : 첫번째 인수로 전달받은 문자열 또는 정규표현식을 검색하여 두 번째 인수로 전달한 문자열로 치환한 문자열을 반환한다.
const strReplace = 'Hello World';

console.log(strReplace.replace('World', 'Lee')); // Hello Lee

// replace 메서드의 첫번째 인수로 정규표현식을 전달할 수도 있다. 'hello'를 대소문자를 구별하지 안혹 전역 검색한다.
console.log(strReplace.replace(/hello/gi, 'Lee')); // Lee World

// replace 메서드에 정규표현식을 집어넣어서 카멜케이스를 스네이크케이스로 혹은 그 반대 함수를 만들 수 도 있다.

// * String.prototype.split : 첫번째 인수로 전달한 문자열 또는 정규 표현식을 검색하여 문자열을 구분 한 후 분리된 각 문자열로 이루어진 배열을 반환한다.
const strSplit = 'How are you doing?';

// 공백으로 구분(단어로 구분)히여 배열로 반환한다.
console.log(strSplit.split()); // [ 'How are you doing?' ]
// 여러 가지 공백문자(스페이스, 탭 등)를 의미한다.
console.log(strSplit.split(/\s/g)); // [ 'How', 'are', 'you', 'doing?' ]
// 인수로 빈 문자열을 전달하면 각 문자를 모두 분리한다.
console.log(strSplit.split(''));
// [
//   'H', 'o', 'w', ' ', 'a',
//   'r', 'e', ' ', 'y', 'o',
//   'u', ' ', 'd', 'o', 'i',
//   'n', 'g', '?'
// ]

// 두번 째 인수에서 배열의 길이를 정해줌
console.log(strSplit.split('', 3)); // [ 'H', 'o', 'w' ]

// 인수로 전달받은 문자열을 역순으로 뒤집는 함수

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('Hello World!')); // !dlroW olleH
