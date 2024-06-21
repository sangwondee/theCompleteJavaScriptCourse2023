// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);
//
// console.log('Wichan');
// console.log(23)
//
let firstName = "Wichan";
console.log(firstName);
console.log(firstName);
console.log(firstName);
//
// // Variable name conventions
// let wichan_sangwondee = "JM";
// let $function = 27
//
// let person = "wichan"
// let PI = 3.1415;
//
// let myFirstJob = 'Programmer'
// let myCurrentJob = 'Teacher'
//
// let job1 = 'programmer'
// let job2 = 'teacher'
//
// console.log(myFirstJob);
//
// let country = 'Thailand'
// let continent = 'Asia'
// let population = 71
//
// console.log(country)
// console.log(continent)
// console.log(population)

// let javascriptIsFun = true
//
// console.log(javascriptIsFun)

// console.log(typeof true)
// console.log(typeof javascriptIsFun)
// console.log(typeof 23)
// console.log(typeof 'Wichan')

// javascriptIsFun = 'YES!'
// console.log(javascriptIsFun)
//
// let year;
// console.log(year)
// console.log(typeof year)
//
// year = 1991
// console.log(typeof year)
// console.log(year)
//
// console.log(typeof null)

// let age = 30
// age = 31
//
// const birthYear = 1991
// birthYear = 1990
// const job;
//
// var job = 'programmer'
// job = 'teacher'
//
// lastName = 'Sangwondee'
// console.log(lastName)

// Math operator
// const now = 2037
// const ageJonas = now - 1991
// const ageSarah = now - 2018
//
// console.log(ageJonas, ageSarah)
// console.log(ageJonas * 2, ageJonas / 10, 2**3)
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
//
// const firstName = 'Wichan'
// const lastName = 'Sangwondee'
// console.log(firstName + ' ' + lastName)
//
// Assignment operators
// let x = 10 + 5 // 15
// x += 10 // x = x + 10 = 25
// x *= 4 // x = x * 4 = 100
// x++
// x--
// x--
// console.log(x)
//

// console.log(ageJonas > ageSarah)
// console.log(ageSarah >= 18)
//
// const isFullAge = ageSarah >= 18
// console.log(now - 1991 > now - 2018)

// const now = 2037
// const ageJonas = now - 1991
// const ageSarah = now - 2018
// console.log(now - 1991 > now - 2018)

// Links : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// ***Precedence value***
// let x, y
// x = y = 25 - 10 - 5
// console.log(x, y)
//
// const averageAge = (ageJonas + ageSarah) / 2
// console.log(ageJonas, ageSarah, averageAge)

// const massMark = 78
// const heightMark = 1.69
// const weightJohn = 92
// const heightJohn = 1.95

// const massMark = 95
// const heightMark = 1.88
// const weightJohn = 85
// const heightJohn = 1.76

// const BMIMark = massMark / heightMark ** 2
// const BMIJohn = weightJohn / (heightJohn * heightJohn)
// const markHigherBMI = BMIMark > BMIJohn
//
// console.log(BMIMark, BMIJohn, markHigherBMI)

// const firstName = 'Wichan'
// const job = 'teacher'
// const birthYear = 1991
// const year = 2037
//
// const wichan = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + ' !'
// console.log(wichan)
//
// const wichanNew = `I'm ${firstName}, a ${year - birthYear} years old ${job} !`
// console.log(wichanNew)
//
// console.log(`Just a regular string...`)
//
// console.log('String with \n\
// multiple \n\
// lines')
//
// console.log(`String
// multiple
// lines`)

// const age = 15
//
// if (age >= 18) {
//     console.log(`Sarah can start driving license 🚗😙`)
// } else {
//     const yearsLeft = 18 - age
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
// }
//
// const birthYear = 2012
// let century
//
// if (birthYear <= 2000)
// {
//     century = 20
// } else {
//     century = 21
// }
//
// console.log(century)

// const massMark = 78
// const heightMark = 1.69
// const weightJohn = 92
// const heightJohn = 1.95

// const massMark = 95
// const heightMark = 1.88
// const weightJohn = 85
// const heightJohn = 1.76

// const BMIMark = massMark / heightMark ** 2
// const BMIJohn = weightJohn / (heightJohn * heightJohn)
//
// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's ${BMIJohn}!`)
// } else {
//     console.log(`John's BMI is (${BMIJohn}) is higher than Mark's ${BMIMark}!`)
// }

// Type conversion
// const inputYear = '1991'
// console.log(Number(inputYear), inputYear)
// console.log(Number(inputYear) + 18)
//
// console.log(Number('Wichan'));
// console.log(typeof NaN)
//
// console.log(String(23), 23)
//
// Type coercion
// console.log('I am ' + 23 + ' years old')
// console.log('23' - '10' - 3)
// console.log('23' / '2')
//
// อ่านเรื่อง coercion สำคัญมากกกกกกเพราะมันจะทำให้เรา งง
//
// let n = '1' + 1
// n = n - 1
//
// console.log(n)

// 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Wichan'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 100;

// if (money) {
//     console.log(`Don't spend it all ;)`);
// } else {
//     console.log(`You should get a job!`);
// }

// let height;

// if (height) {
//     console.log(`YAY! Height is defined`);
// } else {
//     console.log(`Height is UNDEFINED`);
// }

// const age = '18';

// เน้น ใช้ตัวนี้
// if (age === 18) console.log(`Your just became an adult :D (strict)`)
//
// if (age == 18) console.log(`Your just became an adult :D (loose)`)
//
// const favorite = Number (prompt("What's your favorite number ?"))
// console.log(favorite)
// console.log(typeof favorite)
//
// if (favorite === 23) { // 22 === 23 -> FALSE
//     console.log(`Cool! 23 is an amazing number!`)
// } else if (favorite === 7) {
//     console.log(`7 is also a cool number`)
// } else if (favorite === 9) {
//     console.log(`9 is also a cool number`)
// } else {
//     console.log(`Number is not 23 or 7 or 9`)
// }
//
// if (favorite !== 23) console.log(`Why not 23 ?`)

// const hasDriversLicense = true // A
// const hasGoodVision = true // B
//
// console.log(hasDriversLicense && hasGoodVision)
// console.log(hasDriversLicense || hasGoodVision)
// console.log(!hasDriversLicense)

// const shouldDrive = hasDriversLicense && hasGoodVision
//
// if (shouldDrive) {
//     console.log(`Sarah is able to drive !`)
// } else {
//     console.log(`Someone else should drive...`)
// }

// const isTired = true // C
// console.log(hasDriversLicense && hasGoodVision && isTired)
//
// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log(`Sarah is able to drive !`)
// } else {
//     console.log(`Someone else should drive...`)
// }

// const scoreDolphins = (96 + 108 + 89) / 3
// const scoreKoalas = (88+ 91 + 110) / 3
// console.log(scoreDolphins, scoreKoalas)
//
// if (scoreDolphins === scoreKoalas) {
//     console.log(`both win the trophy`)
// } else if (scoreDolphins > scoreKoalas) {
//     console.log(`Dolphins Win the trophy ! `)
// } else if (scoreKoalas > scoreDolphins) {
//     console.log(`Koalas Win the trophy !`)
// }

// BONUS 1
// const scoreDolphins = (97 + 112 + 80) / 3
// const scoreKoalas = (109+ 95 + 50) / 3
// console.log(scoreDolphins, scoreKoalas)
//
// if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//     console.log(`both win the trophy`)
// } else if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log(`Dolphins Win the trophy ! `)
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log(`Koalas Win the trophy !`)
// } else {
//     console.log(`No one wins the trophy`)
// }

// const day = 'friday'
//
// switch (day) {
//     case 'monday': // day === 'monday'
//         console.log(`Plan course structure`)
//         console.log(`Go to coding meetup`)
//         break
//     case 'tuesday':
//         console.log(`Prepare theory videos`)
//         break
//     case 'wednesday':
//     case 'thursday':
//         console.log(`Write code examples`)
//         break
//     case 'friday':
//         console.log(`Record videos`)
//         break
//     case 'saturday':
//     case 'sunday':
//         console.log(`Enjoy the weekend :D`)
//         break
//     default:
//         console.log(`Not a valid day!`)
// }


// if (day === 'monday') {
//     console.log(`Plan course structure`)
//     console.log(`Go to coding meetup`)
// } else if (day === 'tuesday') {
//     console.log(`Prepare theory videos`)
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log(`Write code examples`)
// } else if (day === 'friday') {
//     console.log(`Record videos`)
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log(`Enjoy the weekend :D`)
// } else {
//     console.log(`Not a valid day!`)
// }

// const age  = 15
// // age >= 18 ? console.log(`I like to drink wine`) : console.log(`I like to drink water`)
//
// const drink = age >= 18 ? 'wine' : 'water'
// console.log(drink)
//
// let drink2
// if (age > 18) {
//     drink2 = 'wine'
// } else {
//     drink2 = 'water'
// }
//
// console.log(drink2)
//
// console.log(`I like to drink ${drink}`)

const bill = 430
// ของ video ทีเรียน
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2

// ของเราเขียน
// switch (true) {
//     case bill >= 50 && bill <= 300 :
//         tip = 0.15 * bill
//         break
//     default:
//         tip = 0.20 * bill
//         break
// }

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${tip + bill}`)


