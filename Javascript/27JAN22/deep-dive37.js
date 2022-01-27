/** @format */

// Date : 표준 빌트인 객체인 Date는 날짜와 시간을 위한 메서드를 제공하는 빌트인 객체이면서 생성자 함수다.

// Date 생성자 함수 : Date는 생성자 함수다. Date 생성자 함수로 생성한 Date 객체는 내부적으로 날짜와 시간을 나타내는 정수값을 갖는다. Date 생성자 함수로 생성한 Date 객체는 기본적으로 현재 날짜와 시간을 타나내는 정수값을 가진다. 현재 날짜와 시간이 아닌 다른 날짜와 시간을 다루고 싶은 경우 Date 생성자 함수에 명시적으로 해당 날짜와 시간 정보를 인수로 지정한다. Date 생성자 함수로 객체를 생성하는 방법은 다음과 같이 4가지가 있다.

// * new Date() : Date 생성자 함수를 인수 없이 new 연산자와 함께 호출하면 현재 날짜와 시간을 가지는 Date 객체를 반환한다. Date 객체는 내부적으로 날짜와 시간을 나타내는 정수값을 갖지만 Date 객체를 콘솔에 출력하면 기본적으로 날짜와 시간 정보를 출력함
console.log(new Date()); // 2022-01-27T09:14:25.359Z

// Date 생성자 함수를 new 연산자 없이 호출하면 Date 객체를 반환하지 않고 날짜와 시간 정보를 나타내는 문자열을 반환한다.
console.log(Date()); // Thu Jan 27 2022 18:19:17 GMT+0900 (Korean Standard Time)

// * new Date(milliseconds) : Date 생성자 함수에 숫자 타입의 밀리초를 인수로 전달하면 1970년 1월 1일 00:00:00을 기점으로 인수로 전달된 밀리초만큼 경과한 날짜와 시간을 나타내는 Date 객체를 반환한다.

console.log(new Date(0)); // 1970-01-01T00:00:00.000Z

// * new Date(dateString) : 날짜와 시간을 나타내는 문자열을 인수로 전달하면 지정된 날짜와 시간을 나타내는 Date 객체를 반환한다.
console.log(new Date('2022/01/27/10:00:00')); // 2022-01-27T01:00:00.000Z

// * new Date(year,month[,day,hour,minute,second,millisecond]) : 생성자 함수에 연,월,일,시,분,초,밀리초 의미하는 숫자를 인수로 전달하면 지정된 날짜와 시간을 나타내는 Date 객체를 반환한다.
console.log(new Date(2022, 2)); //2022-02-28T15:00:00.000Z
console.log(new Date(2020, 4, 12)); // 2020-05-11T15:00:00.000Z

// Date 메서드

// * Date.now : 1970년 1월 1일을 기점으로 현재 시간까지 경과한 밀리초를 숫자로 반환한다.
console.log(Date.now()); // 1643277270953

// * Date.parse : 인수로 전달된 지정 시간(new Date(dateString)의 인수와 동일한 형식)까지의 밀리초를 숫자로 반환한다.
console.log(Date.parse('1970/01/02/09:00:00')); // 86400000

// * Date.UTC : 1970 1월 1일을 기점으로 인수로 전달된 지정 시간까지의 밀리초를 숫자로 반환한다.

// * Date.prototype.getFullYear : Date 객체의 연도를 나타내는 정수를 반환한다.
console.log(new Date('2020/07/24').getFullYear()); // 2020
// * Date.prototype.setFullYear : Date 객체에 연도를 나타내는 정수를 설정한다. 연도 이외에 옵션으로 월, 일도 설저할 수 있다.
const today = new Date();

// 년도 지정
today.setFullYear(2000);
console.log(today.getFullYear()); // 2000

// 년도/월/일 지정
today.setFullYear(1900, 0, 1);
console.log(today.getFullYear()); // 1900

// * Date.prototype.getMonth : Date 객체의 월을 나타내는 0 ~ 11의 정수를 반환한다.
console.log(new Date('2020/07/24').getMonth()); // 6

// * Date.prototype.setMonth : Date 객체에 월을 나타내는 0 ~ 11의 정수를 설정한다.
const month = new Date();

// 월 지정
month.setMonth(0);
console.log(month.getMonth()); // 0 -> 1월

// 월/일 지정
month.setMonth(11, 1);
console.log(month.getMonth()); // 11

// * Date.prototype.getDate : 객체의 날짜 (1 ~ 31)를 나타내는 정수를 반환한다.
console.log(new Date('2022/01/24').getDate()); // 24
// * Date.prototype.setDate : 객체의 날짜 (1 ~ 31)를 나타내는 정수를 설정한다.
const day = new Date();

day.setDate(27);
console.log(day.getDate()); // 27

// * Date.prototype.getDay : Date 객체의 요일(0~6)을 나타내는 정수를 반환한다. 반환값은 다음과 같다.
console.log(new Date('2022/01/27').getDay()); // 4 (Thursday)

// * Date.prototype.getHours : Date 객체의 시간 (0~23)을 나타내는 정수를 반환한다.
console.log(new Date('2022/01/27/10:51').getHours()); // 10

// * Date.prototype.setHours : Date 객체의 시간을 설정한다.
const hour = new Date();

// 시간지정
hour.setHours(2);
console.log(hour.getHours()); // 2
// 시간 분 초 밀리초 지정 가능
hour.setHours(2, 25, 10, 10);
console.log(hour.getHours()); // 2

// * Date.prototype.getMinutes : Date 객체의 분(0~59)을 나타내는 정수를 반환한다.
// * Date.prototype.setMinutes : Date 객체의 분을 나타내는 정수를 설정한다.
// * Date.prototype.getSeconds : Date 객체의 초를 나타내는 정수를 반환한다.
// * Date.prototype.setSeconds : Date 객체의 초를 나타내는 정수를 설정한다.
// * Date.prototype.getMilliseconds : Date 객체의 밀리초(0,999)를 나타내는 정수를 반환한다.
// * Date.prototype.setMilliseconds : Date 객체의 밀리초(0,999)를 나타내는 정수를 설정한다.

// * Date.prototype.toDateString : 사람이 읽을 수 있는 형식의 문자열로 Date 객체의 날짜를 반환한다.
const dateToString = new Date('2022/01/27/10:57');

console.log(dateToString.toString()); // Thu Jan 27 2022 10:57:00 GMT+0900 (Korean Standard Time)
console.log(dateToString.toDateString()); // Thu Jan 27 2022

// * Date.prototype.toTimeString : 사람이 읽을 수 있는 형식으로 Date 객체의 시간을 표현한 문자열을 반환한다.
console.log(dateToString.toTimeString()); // 10:57:00 GMT+0900 (Korean Standard Time)

// * Date.prototype.toLocaleString : 인수로 전달한 로컬을 기준으로 Date 객체의 날짜와 시간을 표현한 문자열을 반환한다.
const DateLocale = new Date('2022/01/27/11:19');
console.log(DateLocale.toString()); // Thu Jan 27 2022 11:19:00 GMT+0900 (Korean Standard Time)
console.log(DateLocale.toLocaleString()); // 1/27/2022, 11:19:00 AM
console.log(DateLocale.toLocaleString('ko-KR')); // 2022. 1. 27. 오전 11:19:00
console.log(DateLocale.toLocaleString('en-US')); // 1/27/2022, 11:19:00 AM

// * Date.prototype.toLocaleTimeString : 인수로 전달한 로컬을 기준으로 Date 객체의 시간을 표현한 문자열을 반환한다.
console.log(DateLocale.toLocaleTimeString()); // 11:19:00 AM
console.log(DateLocale.toLocaleTimeString('ko-KR')); // 오전 11:19:00

// Date 를 활용한 시계 예제

(function printNow() {
  const todayJP = new Date();

  const dayNames = [
    '(월요일)',
    '(화요일)',
    '(수요일)',
    '(목요일)',
    '(금요일)',
    '(토요일)',
    '(일요일)',
  ];

  // getDay 메서드는 해당 요일을 나타내는 정수를 반환한다.
  const dayJP = dayNames[todayJP.getDay()];
  const yearJP = todayJP.getFullYear();
  const monthJP = todayJP.getMonth();
  const dateJP = todayJP.getDate();
  let hourJP = todayJP.getHours();
  let minuteJP = todayJP.getMinutes();
  let secondJP = todayJP.getSeconds();

  // 12 시간제로 변경
  hourJP %= 12;
  hourJP = hourJP || 12; // hour가 0이면 12를 재할당

  // 10 미만인 분과 초를 2자리로 변경
  minuteJP = minuteJP > 10 ? '0' + minuteJP : minuteJP;
  secondJP = secondJP > 10 ? '0' + secondJP : secondJP;

  console.log(
    `${yearJP}년 ${monthJP}월 ${dateJP}일 ${hourJP}시 ${minuteJP}분 ${secondJP}초 ${dayJP}요일`
  );

  setTimeout(printNow, 1000);
})();
