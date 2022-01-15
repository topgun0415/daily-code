/** @format */

// 배열 메서드 : 자바스크립트는 배열을 다룰 때 유용한 다양한 빌트인 메서드를 제공한다. Array 생성자 함수는 정적 메서드를 제공하며, 배열 객체의 프로토타입인 Array.prototype은 프로토타입 메서드를 제공한다.

// * Array.isArray : Array 생성자 함수의 정적 메서드다. Array.of , Array.from도 Array 생성자 함수의 정적 메서드다. Array.isArray 메서드는 전달된 인수가 배열이면 true, 배열이 아니면 false를 반환한다.

// true
console.log(Array.isArray([]));
console.log(Array.isArray([1, 2]));
console.log(Array.isArray(new Array()));

// false
console.log(Array.isArray());
console.log(Array.isArray({}));
console.log(Array.isArray(null));
console.log(Array.isArray(undefined));

// * Array.prototype.indexOf : indexOf 메서드는 원본 배열에서 인수로 전달된 요소를 검색하여 인덱스를 반환한다. 원본 배열에 인수로 전달한 요소와 중복되는 요소가 여러 개 있다면 첫 번째로 검색된 요소의 인덱스를 반환한다. 원본 배열에 인수로 전달한 요소가 존재하지 않으면 -1을 반환한다.

const arr = [1, 2, 3, 4];
console.log(arr.indexOf(2)); // 1
console.log(arr.indexOf(5)); // -1
// 두 번째 인수는 검색을 시작할 인덱스다. 두 번째 인수를 생략하면 처음부터 검색한다.
console.log(arr.indexOf(4, 1)); // 3
// indexOf 메서드는 배열에 특정 요소가 존재하는지 확인할 때 유용하다.

const foods = ['apple', 'banana', 'orange'];
// foods 배열에 'orange' 요소가 존재하는지 확인한다.
if (foods.indexOf('orange') === -1) {
  // foods 배열에 'orange' 요소가 존재하지 않으면 'orange' 요소를 추가한다.
  foods.push('orange');
}

console.log(foods); // [ 'apple', 'banana', 'orange' ]

// 하지만 ES7에서 도입된 Array.prototype.includes 메서드를 사용하면 가독성이 더 좋다.

const food = ['apple', 'banana', 'orange'];
// food 배열에 'pineapple' 요소가 존재하는지 확인한다.
if (!food.includes('pineapple')) {
  // food 배열에 'pineapple' 요소가 존재하지 않으면 'pineapple' 요소를 추가한다.
  food.push('pineapple');
}

console.log(food); // [ 'apple', 'banana', 'orange', 'pineapple' ]

// * Array.prototype.push : push 메서드는 인수로 전달받은 모든 값을 원본 배열의 마지막 요소로 추가하고 변경된 length 프로퍼티 값을 반환한다.push 메서드는 원본 배열을 직접 변경한다.

const arr1 = [1, 2];
// 인수로 전달받은 모든 값을 원본 배열 arr1의 마지막 요소로 추가하고 변경된 length 값을 반환한다.
let result = arr1.push(3);
console.log(result); // 3
// push 메서드로 원본 배열을 직접 변경한다.
console.log(arr1); // [ 1, 2, 3 ]
// 하지만 push 메서드는 성능 면에서 좋지않다. 마지막 요소로 추가할 요소가 하나뿐이라면 push 메서드를 사용하지 않고 length 프로퍼티를 사용하여 배열의 마지막 요소를 직접 추가할 수도 있다. 이 방법이 push 보다 빠르다/
arr1[arr1.length] = 4;
console.log(arr1); // [ 1, 2, 3, 4 ]
// push 메서드는 원본 배열을 직접 변경하는 부수 효과가 있다. 따라서 push 메서드 보다는 ES6의 스프레드 문법을 사용하는 편이 좋다.
const newArr = [...arr1, 5];
console.log(newArr); // [ 1, 2, 3, 4, 5 ]

// * Array.prototype.pop : pop 메서드는 원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환한다. 원본 배열이 빈 배열이면 undefined를 반환한다. pop 메서드는 원본 배열을 직접 변경한다.

const arr2 = [1, 2, 3];

//원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환한다.
let result2 = arr2.pop();
console.log(result2); // 3
console.log(arr2); // [ 1, 2 ]

// * Array.prototype.unshift : unshift 메서드는 인수로 전달받은 모든 값을 원본 배열의 선두에 요소로 추가하고 변경된 length 프로퍼티 값을 반환한다. unshift 메서드는 원본 배열을 직접 변경한다.
const arr3 = [1, 2, 3];
// 인수로 전달받은 모든 값을 원본 배열의 선두에 요소로 추가하고 변경된 length 값을 반환한다.
let result3 = arr3.unshift(0);
console.log(result3); // 4
console.log(arr3); // [ 0, 1, 2, 3 ]
// unshift 메서드는 원본 배열을 직접 변경하는 부수 효과가 있다. 따라서 unshift 메서드보다는 ES6의 스프레드 문법을 사용하는 편이 좋다. 스프레드 문법을 사용하면 함수 호출없이 표현식으로 선두에 요소를 추가할 수 있으며 부수 효과도 없다.

// ES6 스프레드 문법
const newArr2 = [-1, ...arr3];
console.log(newArr2); // [ -1, 0, 1, 2, 3 ]

// * Array.prototype.shift : shift 메서드는 원본 배열에서 첫 번째 요소를 제거하고 제거한 요소를 반환한다. 원본 배열이 빈 배열이면 undefined를 반환한다. shift 메서드는 원본 배열을 직접 변경한다.
const arr4 = [1, 2, 3];
// 원본 배열에서 첫 번째 요소를 제거하고 제거한 요소를 반환한다.
let result4 = arr4.shift();
console.log(result4); // 1
console.log(arr4); // [ 2, 3 ]

// * Array.prototype.concat : concat 메서드는 인수로 전달된 값들(배열 또는 원시값)을 원본 배열의 마지막 요소로 추가한 새로운 배열을 반환한다. 인수로 전달한 값이 배열인 경우 배열을 해체하여 새로운 배열의 요소로 추가한다. 원본 배열은 변경되지않는다.

const arr5 = [1, 2];
const arr6 = [3, 4];

// 배열 arr5를 원본 배열 arr6의 마지막 요소로 추가한 새로운 배열을 반환한다.
// 인수로 전달한 값이 배열인 경우 배열을 해체하여 새로운 배열의 요소로 추가한다.
let result5 = arr5.concat(arr6);
console.log(result5); // [ 1, 2, 3, 4 ]

// 숫자를 원본 배열 arr5의 마지막 요소로 추가한 새로운 배열을 반환한다.
result5 = arr5.concat(3);
console.log(result5); // [ 1, 2, 3 ]

// 배열 arr6와 숫자를 원본 배열 arr5의 마지막 요소로 추가한 새로운 배열을 반환한다.
result5 = arr5.concat(arr6, 5);
console.log(result5); // [ 1, 2, 3, 4, 5 ]

// 원본 배열은 변경되지 않는다
console.log(arr5); // [ 1, 2 ]

// push와 unshift 메서드는 concat 메서드로 대체할 수 있다. 다만 push와 unshift 메서드는 원본 배열을 직접 변경하지만 concat 메서드는 원본 배열을 변경하지 ㅏㅇㄴㅎ고 새로운 배열을 반환한다. 따라서 push와 unshift 메서드를 사용할 경우 원본 배열을 반드시 변수에 저장해두어야 하며 concat 메서드를 사용할 경우 반환값을 반드시 변수에 할당받아야한다.

const arr7 = [3, 4];

// unshift 메서드는 원본 배열을 직접 변경한다.
// 따라서 원본 배열을 변수에 저장해 두지 않으면 변경된 배열을 사용할 수 없다.
arr7.unshift(1, 2);
console.log(arr7); // [ 1, 2, 3, 4 ]

arr7.push(5, 6);
console.log(arr7); // [ 1, 2, 3, 4, 5, 6 ]

// concat 메서드로만 활용
const arr8 = [3, 4];
// unshift 메서드를 concat 메서드로 대체
let result6 = [1, 2].concat(arr8);
console.log(result6); // [ 1, 2, 3, 4 ]
// push 메서드를 concat으로 대체
result6 = result6.concat(5, 6);
console.log(result6); // [ 1, 2, 3, 4, 5, 6 ]

// concat 메서드는 ES6의 스프레드 문법으로 대체 가능
let result7 = [1, 2].concat([3, 4]);
console.log(result7); // [ 1, 2, 3, 4 ]

let result8 = [...[1, 2], ...[3, 4]];
console.log(result8); // [ 1, 2, 3, 4 ]
// 결론적으로 Array.prototype 메서드를 사용하기보다는 ES6의 스프레드 문법을 일관성 있게 사용하는것을 권장한다.

// Array.prototype.splice : push, pop, shift, unshift 메서드는 모두 원본 배열을 직접 변경하는 메서드이며 원본 배열의 처음이나 마지막에 요소를 추가하거나 제거한다. splice 메서드는 원본 배열의 중간에 요소를 추가하거나 중간에 있는 요소를 제거하는 경우 splice 메서드를 사용한다. 매개변수가 3개가 있으며 원본 배열을 직접 변경

const arr9 = [1, 2, 3, 4];

// 원본 배열의 인덱스 1부터 2개의 요소를 제거하고 그 자리에 새로운 요소 20,30을 제거한다
const result9 = arr9.splice(1, 2, 20, 30);
// 제거한 요소가 반환됨
console.log(result9); // [ 2, 3 ]
// splice 메서드는 원본 배열을 직접 변경한다.
console.log(arr9); // [ 1, 20, 30, 4 ]
