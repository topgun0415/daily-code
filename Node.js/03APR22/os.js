/** @format */

const os = require('os');

// 운영체제 정보를 담고 있음

console.log(os.cpus()); // model: 'Apple M1',
console.log(os.hostname()); // philipuuu-macbook-pro.local

// path : 경로를 나타냄

const path = require('path');

console.log(__filename);
console.log(
  path.basename('/Users/philipuuu/Dev/Git/daily-code/Node.js/03APR22/os.js')
);
