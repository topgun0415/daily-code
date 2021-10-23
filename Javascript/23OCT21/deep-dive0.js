/** @format */

// Scope & runtime

console.log(arr);

arr = 30;
var arr;

console.log(arr);

// naming convention

var firstName; // camelCase
var first_name; // snake_case
var FirstName; // PascalCase

var strFirstName; // type + identifier (HungarianCase)
var $elem = document.querySelector('myID'); // Dom node
var observable$ = fromEvent(document, 'click'); // RxJS oberservable
