/** @format */

const fs = require('fs');

fs.readFile('Node.js/09APR22/readme.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data); // 노드를 통해서는 읽을 수는 있으나 2진법으로 보여준다
  console.log(data.toString());
});

// Promise식으로도 가능

const fsPromise = require('fs').promises;

fsPromise
  .readFile('Node.js/09APR22/readme.txt')
  .then((data) => {
    console.log(data);
    console.log(data.toString());
  })
  .catch((err) => {
    throw err;
  });
