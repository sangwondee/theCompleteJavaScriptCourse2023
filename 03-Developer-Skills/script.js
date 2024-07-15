// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM
// We work for a company building a smart home thermometer. Our most recent task in this: "Give an array of temperatures of one day, Calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lower temp
// - How to compute max and min temperatures?
// - What's a sensor error ? and what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find Max value in temp array
// - Find Min value in temp array
// - Subtract min from max (amplitude) and return it

// const calcTempAmplitude = function (temps) {
//     let max = temps[0];
//     let min = temps[0];

//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];

//         if (typeof curTemp != 'number') continue;
//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }

//     // console.log(max);
//     // console.log(min);

//     return max - min;
// };

// // calcTempAmplitude([3,7,4, 1, 8])

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// PROBLEM
// Function should now receive 2 array 2 of temps

// 1.) Understanding the problem
// - With 2 arrays, should we implement functionality twice ? NO! Just merge two arrays

// 2.) Breaking up into sub-problems
// - How to merge 2 array

// const calcTempAmplitude = function (t1, t2) {
//     const temps = t1.concat(t2);

//     console.log(temps);

//     let max = temps[0];
//     let min = temps[0];

//     for (let i = 0; i < temps.length; i++)
//     {
//         const curTemp = temps[i];

//         if (typeof curTemp != 'number') continue;
//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }

//     console.log(max, min);

//     return max - min
// }

// calcTempAmplitude([3,7,4, 1, 8])

// const amplitudeNew = calcTempAmplitude([3,5,1], [9,0,5]);
// console.log(amplitudeNew);

// const measureKelvin = function () {
//     const measurement = {
//         type: 'temp',
//         unit: 'celsius',
//         //C) FIX
//         // value: prompt('Degree celsius:'),
//         value: 10,
//     };

//     // console.log(measurement.value);
//     // console.table(measurement.value);
//     // B) FIND
//     const kelvin = Number(measurement.value) + 273;
//     // debugger;
//     return kelvin;
// };
// A) IDENTIFY
// console.log(measureKelvin());

// Using a debugger
// const calcTempAmplitudeBug = function (t1, t2) {
//     const temps = t1.concat(t2);

//     console.log(temps);

//     let max = 0;
//     let min = 0;

//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];

//         if (typeof curTemp != 'number') continue;
//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }

//     console.log(max, min);

//     return max - min;
// };

// calcTempAmplitudeBug([3, 7, 4, 1, 8]);

// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

// // A) IDENTIFY
// console.log(amplitudeBug);

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// const printForecast = function (arr) {
//     let str = '';
//     for (let i = 0; i < arr.length; i++) {
//         str += `...${arr[i]}ºC in ${i + 1} days `;
//     }

//     return str;
// };

// const logString1 = printForecast([17, 21, 23]);
// console.log(logString1);

// const logString2 = printForecast([12, 5, -5, 0, 4]);
// console.log(logString2);
