'use strict';
//
// let hasDriversLicense = false
// const passTest = true
// //
// if (passTest) hasDriversLicense = true
// if (hasDriversLicense) console.log(`I can drive :D`)

// const interface = 'Audio';
// const private = 534

// function logger() {
//     console.log(`My name is Wichan`);
// }
// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     return `Juice with ${apples} apples and ${oranges} oranges.`;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');
// console.log(num);

// someText = 'JavaScript1.2';
// pattern = /(w+)(d).(d)/i;
// result = pattern.exec(someText);

// console.log(result);

// Function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// Function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);
// console.log(age2);

// Function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// };

// Arrow function
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retirement is ${retirement}`;
// }

// console.log(yearsUntilRetirement(1991, 'Wichan'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangesPieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apples and ${orangesPieces} pieces of oranges.`;

//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retirement is ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retried`);
//         return -1;
//     }
// };

// console.log(yearsUntilRetirement(1991, 'Wichan'));
// console.log(yearsUntilRetirement(1970, 'Mike'));

// Arrow function
// const calcAverage = (one, two, three) => (one + two + three) / 3;
// const average = calcAverage(3, 4, 5);
// console.log(average);

// Test1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log(`No team wins...`);
//     }
// };

// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(575, 111);

// // Test2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = `Wichan`;
// const wichan = [firstName, 'Sangwondee', 2037 - 1989, 'teacher', friends];

// console.log(wichan);
// console.log(wichan.length);

// // Exercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

// const friends = ['Michael', 'Steven', 'Peter'];

// // Add elements
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// // Remove elements
// friends.pop(); // Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if (friends.includes('Steven')) {
//     console.log('You have friend call Steven');
// }


// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// }

// const bills = [125, 555, 44];

// // const calcTip = (bills) => (bills <= 300 && bills >= 50 ? bills * 0.15 : bills * 0.2);

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// calcTip(bills[2])

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

// console.log(bills, tips, totals);

// console.log(tips.push(calcTip(bills)));

// console.log(calcTip(100));

// const WichanArray = [
//     , 'Wichan' 
//     , 'Sangwondee' 
//     , 2037 - 1991
//     , 'techer'
//     , ['Michael', 'Peter', 'Steven']
// ]

// const wichans = {
//     firstName: 'Wichan',
//     lastName: 'Sangwondee',
//     age: 2037 - 1991,
//     job: 'developer',
//     friends: ['Michael', 'Peter', 'Steven']
// }

// console.log(wichans);
// console.log(wichans.lastName);  

// const nameKey = 'Name';
// console.log(wichans['first' + nameKey]);
// console.log(wichans['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Wichan? Choose between firstName, lastName, age, job, and friends');
// // console.log(wichans[interestedIn]);

// wichans[interestedIn] ? console.log(wichans[interestedIn]) : console.log('Wrong request Choose between firstName, lastName, age, job, and friends !');

// wichans.location = 'Thailand';
// wichans['twitter'] = '@sangwondee'
// console.log(wichans);

// Challenge
// "Wichan has 3 friends, and his best friend is called Michael"

// const bestFriendName = prompt('His is my best friend'); 
// wichans.friends[bestFriendName] ? wichans.friends[bestFriendName] : 'have no friend';
// const bestFriendName1  = prompt(wichans.friends[bestFriendName]);
// console.log(wichans.firstName + " has " + wichans.friends.length + " and best friend is called " + bestFriendName)

// เฉลย
// console.log(`${wichans.firstName} has ${wichans.friends.length} friends, and his best friend is called ${wichans.friends[0]} `);
// console.log(wichans[firstName]);

// Google Search for more information => mdn operator precedence


// const wichans = {
//     firstName: 'Wichan',
//     lastName: 'Sangwondee',
//     birthYear: 1991,
//     job: 'developer',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,
//     // calcAge: function (birthYear) {
//     //     return 2037 - this.birthYear
//     // }

//     // calcAge: function () {
//     //     console.log(this);
//     //     return 2037 - this.birthYear
//     // }
//     calcAge: function () {
//         this.age = 2037 - this.birthYear
//         return this.age 
//     },
//     checkLicense: function () {
//         return this.hasDriversLicense ? `a driver's license`  : `no driver's license`;
//     },
//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? `a driver's license` : `no driver's license`} `
//     }
// // this คือตัวแปรที่ใช้ใน obejct 
// }

// console.log(wichans.calcAge());
// console.log(wichans.age);
// console.log(wichans.age);
// console.log(wichans.age);

// Challenge
// "Wichan is a 46-year old teacher, and he has a/no driver's license"
// console.log(`${wichans.firstName} is a ${wichans.calcAge()}-year old teacher, and he has ${wichans.checkLicense()} `);
// console.log(wichans.getSummary());

// const Mark = {
//     fullName : 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = Math.round(this.mass / (this.height * this.height) * 10) / 10
//         return this.bmi
//     },
// }

// const John = {
//     fullName : 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = Math.round(this.mass / (this.height * this.height) * 10) /10
//         return this.bmi
//     }
// }

// console.log(John.calcBMI() > Mark.calcBMI())


// console.log(`${John.fullName}'s BMI (${John.bmi}) ${John.bmi >= Mark.bmi ? `is higher than` : `is less than` } ${Mark.fullName}'s (${Mark.bmi}) ! `);
// debugger;

// for (let rep = 0; rep < array.length; rep++) {
//     const element = array[rep];
    
// }

// for loop keeps running while condition is TRUE
// for (let rep  = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`)
// }


// const wichan = [
//     , 'Wichan' 
//     , 'Sangwondee' 
//     , 2037 - 1991
//     , 'techer'
//     , ['Michael', 'Peter', 'Steven']
//     , true
// ]

// const types = [];

// for (let i = 0; i < wichan.length; i++) {
//     // Reading fron wichan array
//     console.log(wichan[i], typeof wichan[i]);

//     // Filling types array
//     // types[i] = typeof jonas[i];
//     types.push(typeof wichan[i])
// }

// // console.log(types);

// const years = [1991, 2007, 1969, 2020]
// const ages = []

// for(let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]) 
// }

// // console.log(ages);

// // continue and break
// console.log('--- ONLY STRINGS ---');
// for (let i = 0; i < wichan.length; i++) {
//     if (typeof wichan[i] !== 'string') continue;
    
//     console.log(wichan[i], typeof wichan[i]);
// }

// console.log('--- BREAK WITH NUMBER ---');
// for (let i = 0; i < wichan.length; i++) {
//     if (typeof wichan[i] === 'number') break;
    
//     console.log(wichan[i], typeof wichan[i]);
// }

// const wichan = [
//     , 'Wichan' 
//     , 'Sangwondee' 
//     , 2037 - 1991
//     , 'techer'
//     , ['Michael', 'Peter', 'Steven']
// ]

// for (let i = wichan.length - 1; i>=0; i-- ) {
//     console.log(wichan[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`-------- Starting exericise ${exercise}`);
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
//     }
// }

// let rep = 1
// while (rep <= 10) {
//     console.log(`WHILE: Exercise Lifting weight repetition ${rep}`);
//     rep++;
// }


// let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice);

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end (6)...');
// }


// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

//  for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i])
// }

// console.log(bills, tips,totals);

// const calcAverage = function (arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         // sum = sum + arr[i];
//         sum +=  arr[i];
//     }

//     return sum / arr.length;
// }

// console.log(calcAverage([2, 3, 7]));

// console.log(calcAverage(bills))
// console.log(calcAverage(tips))
// console.log(calcAverage(totals))

// change something


// Rember, we're gonna use strict mode in all scripts now !
