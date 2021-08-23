// 연산자 우선순위 이해하기

console.log(2+3*4);
console.log(3**(2+1));

// 0.1과 0.2를 더하면 어떤 값이 나올까?
console.log(0.1+0.2);
// 신기하게 0.3이 아닌 0.300000000..4가 출려되는걸 볼 수 있다. 이는 대부분의 프로그래밍 언어가 겪고 있는 부동소수점 문제이다. 이를 해결하기 위해서는...
console.log(0.3*10 - 0.1*10) / 10;
// 정수로 고쳐준 다음에 다시 실수로 바꿔주면 된다. 

// boolean 값 

true; false;
console.log(typeof(true));
console.log(5 > 3);
console.log(5 < 3);
console.log(5 <= 3);
console.log(5 >= 3);
console.log(5 == 3);
console.log(5 == 5);
console.log(5 != 3);
console.log(5 != 5);

// 특이하게 NaN끼리 비교하면 숫자, 문자열, 불 값을 통틀어서 false가 나오는 유일한 값
console.log(NaN==NaN);   
// 똑같아 보이지만은 true가 1, false가 0임 
console.log(true > false);
// 모든 문자열에는 유니코드라는 번호로 주어지기 때문에 크기비교가 가능함. (a는 97, b는 98)
console.log("'a' > 'b' = " + ('a' > 'b'));

console.log('a'.charCodeAt());  // charCodeAt()로도 문자번호 구하기 가능
console.log('b'.charCodeAt());

console.log("3" < 5);   // 더하기를 제외하면 빼기 연산자 때처럼 다른 자료형이 모두 숫자로 형 변환되어 비교되어진다.
console.log("abc" < 5); // 문자열에서 정수로 바뀌면 NaN이 되고, NaN과 비교는 항상 Fals이다.
console.log("0" < true); // 불리언 값도 비교가 가능

// == 와 ===의 차이 이해하기

console.log("1" == 1);
console.log(1 == true);
// 분명 문자열 1과 정수 1은 다르지만 위에 식 모두 true가 출력된다. 이는 자바스크립트에서 자동으로 형 변환 후 비교하기 때문에 모두 true값이 나오는 것임 만약 자료형까지 같은지도 비교하기 위해서는 ===를 써서 비교해야함
console.log("1" === 1);
console.log(1 === true);
console.log(1 === 1);
// === 와 같이 !==도 있으니 사용하면 됨 

//논리 연산자 사용하기

console.log(10 > 5 && 6 < 8);   // 두개 다 true가 되어야지 true가 출력되는 and논리연산자 
console.log(10 < 5 || 6 < 8);   // 둘 중에 하나만 true 가 되어도 true가 출력되는 or논리연산자
console.log(!true);
console.log(!false);

console.log(!(2 < 0));  // 논리연사자에도 우선순위가 있다. 괄호부터 먼저 계산되어 false인 값이 true로 계산되어 출력된다
console.log(!2 < 0);    // !2는 false 이고 false < 0 가 되어 항상 false 가 출력되는 식 

console.log((5 + 4) * 3 === 27);

// 빈 값 사용하기 : undefined , null , object , symbol이 있다. 

// 콘솔창에서 console.log("hello, world!") 라고 치면 출력값 밑에 부수적으로 undefined!가 나온다. 이는 보통 반환할 결괏값이 없을때 나옵니다.

// 이와 반대로 null이란 빈 값도 있다 하지만 이는 undefined와 같지 않다
console.log(undefined == null); // 빈 값이라는 점에서는 같다고 출력됨
console.log(undefined === null); // 이 둘도 불값으로 형변환 하면 false가 출력됨 

console.log(typeof undefined);
console.log(typeof null); // 위와 같이 null 의 타입은 null이 되어야 정상적이지만 object가 나온다. 이는 자바스크립트의 유명한 버그 
