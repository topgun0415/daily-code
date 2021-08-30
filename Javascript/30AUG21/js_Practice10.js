// 2.5.6 중첩 반복문 사용하기


for (let k = 0; k < 2; k++) {
  for (let q = 0; q < 3; q++) {
    console.log(k,q)
  }
}


// 1분 퀴즈 : 구구단을 출력하되 , 결과에 짝수가 하나도 나오지 않게 해보세요!

for (let i = 1; i < 10; i++) {    
  for (let j = 1; j < 10; j++) {
    if ((i * j) % 2 === 0) 
    continue;
    console.log(i + "x" + j + "=" + (i * j))
  }
}

/* 답지 
for(let i = 0; i < 10; i++) {
  for(let j = 0; j < 10; j++) {
    if (i % 2 === 0 || j % 2 === 0) continue;
    console.log(i, '*', j, '=', i*j)
  }
}
*/






