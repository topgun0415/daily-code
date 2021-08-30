// 2.5.2 for 반복문으로 반복해서 출력하기

/* 형식
  for (시작; 조건식; 종료식) {
    실행문;
  }
*/

// 2.5.3 1부터 100까지 출력하기

let j = 0;
while (j < 100) {
    console.log(j + 1);
    j++;
}

// 1분 퀴즈 

for (let i = 0; i <= 100; i++) {         // 콘솔에 Hello, world!를 100번 출력하는 코드
    console.log(i + 1);
}

// 2.5.4 break문으로 반복문 멈추기

let i = 0;
while(true) {
  if(i===5) break;
  i++;
}
console.log(i);
// 정상적인 while문이었으면 무한히 반복될 반복문이었지만 break문 때문에 5까지밖에 실행이 안됐음

// 2.5.5 continue문으로 코드 실행 건너뛰기 

// 지금 반복문이 특정 조건에서만 실행되기를 원할 경우 continue문을 사용하면 가능하다.

let q = 0;
while (q < 10) {
  q++;
  if(q % 2 === 0) {
    continue;  
  }
  console.log("q = " + q);
}
// 예제는 q가 홀수일 때 q를 콘솔에 출력하는 코드입니다. continue문이 실행되면 뒤에 실행문은 실행되지 않으므로 짝수일 때만 출력됨








