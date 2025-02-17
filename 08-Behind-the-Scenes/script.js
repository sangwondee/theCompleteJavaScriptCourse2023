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
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow);

// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// // Example
// console.log(undefined);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All Products deleted !');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);



// เรื่อง this keyword
// console.log(this);

//ถ้าใช้ใน function ธรรมดาในจะขึ้น undefined
// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// }

// calcAge(1991)

// ถ้าใช้ใน arrow function มันจะใช้ได้
// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// }

// calcAgeArrow(1980)

// เราสามารถเรียก function ใน Obj โดยใช้ this keyword นี้ได้
// const jonas = {
//   year : 1991,
//   calcAge : function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   }
// }

// jonas.calcAge();

// const matilda = {
//   year: 2017
// }

// // method borrowing
// matilda.calcAge = jonas.calcAge;
// matilda.calcAge()

// const f = jonas.calcAge
// f()

var firstname = 'Matildaaaaa'

const jonas = {
  firstname: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year)

    // solution 1 เป็นแบบเก่าที่ ไม่ใช้ es6
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);      
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // }

    // solution 2 แบบใหม่ให้ใช้แบบ es 6
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
      // console.log(this.year >= 1981 && this.year <= 1996);
    }

    isMillenial();
  },

  // arrow function ไม่ทำงานกับ this keyword
  // เราไม่ควรใช้ arrow function เป็น Method !!!
  greet: function () {
    console.log(this)    
    console.log(`Hey ${this.firstname}`)
  }
}

jonas.greet();
jonas.calcAge();

// arguments key word
// มันสามารถส่งตัวแปล(arguments) เข้าไปได้แต่เรียกใช้ parameter ไม่ได้
const addExpr = function (a, b) {
  // ตัวแปล arguments นี้ สามารถตรวจดูตัวแปลได้
  console.log(arguments);
  return a + b
}

addExpr(2, 5)

// แต่ถ้าหากเป็น arrow function ถ้าเราส่ง arguments เข้าไม่ไม่ถูกต้องมันจะ error เลย
// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 5, 8)
