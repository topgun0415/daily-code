/** @format */
import * as coo from './coo.mjs';
// import { pi as PI, square as SQ } from './coo.mjs'; 하면 export한 식별자 이름을 변경하여 import할 수도 있다
import { pi, square } from './lib.mjs';
import { Person } from './lib.mjs';

console.log(pi); // 3.141592653589793
console.log(square(2)); // 4

const a = new Person('Philip');
console.log(a.name);

console.log(coo.minus(5)); // 0
console.log(new coo.WhoamI('Himeru')); // WhoamI { name: 'Himeru' }
console.log(coo.number); // 7777

// export default x => x * x;
// default 키워드를 사용하는 경우 var, const, let을 사용할 수 없다
// default 키워드와 함께 export한 모듈은 {} 없이 임의의 이름으로 import한다
// inport square from './lib.mjs';
