/** @format */

const buffer = Buffer.from('change me to buffer');
console.log(buffer); // <Buffer 63 68 61 6e 67 65 20 6d 65 20 74 6f 20 62 75 66 66 65 72>
console.log(buffer.length); // 19
console.log(buffer.toString()); // change me to buffer

// 버퍼링으로 받은 데이터들을 모음

const arr = [
  Buffer.from('hello'),
  Buffer.from('world'),
  Buffer.from('Philipuuu'),
];
console.log(arr);
// [
//   <Buffer 68 65 6c 6c 6f>,
//   <Buffer 77 6f 72 6c 64>,
//   <Buffer 50 68 69 6c 69 70 75 75 75>
// ]
console.log(arr.toString()); // hello,world,Philipuuu
console.log(Buffer.concat(arr).toString()); // helloworldPhilipuuu
