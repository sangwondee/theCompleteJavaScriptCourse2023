'use strict';

// How scope work !!!

// function calcAge(birthYear) {
//     console.log(firstname)
//     const age = 2037 - birthYear;

//     function printAge() {
//         let output = `${firstname}, you are ${age}, born in ${birthYear}`
//         console.log(output);

//         if (birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true;

//             // Creating NEW variable with same name as outer scope's variable
//             const firstname = 'Steven';

//             // Reassigning outer scope's variable
//             output = 'NEW OUTPUT!'

//             const str = `Oh, and you're a millenial, ${firstname}`;
//             console.log(str)

//             function add(a, b) {
//                 return a+b;
//             }
//         }

//         console.log(millenial)
//         // console.log(add(2, 3))
//         console.log(output)
//     }
//     printAge();

//     return age;
// }

// const firstname = 'Sangwondee'
// calcAge(1991)

//Variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas'
// let job = 'Teacher'
// const year = 1991

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);

// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All Products deleted !');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
