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


const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];
    
    for (let i = 0; i < temps.length; i++)
    {
        const curTemp = temps[i];

        if (typeof curTemp != 'number') continue;
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }

    // console.log(max);
    // console.log(min);

    return max - min
}

// calcTempAmplitude([3,7,4, 1, 8])

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);


// PROBLEM
// Function should now receive 2 array 2 of temps

// 1.) Understanding the problem
// - With 2 arrays, should we implement functionality twice ? NO! Just merge two arrays


// 2.) Breaking up into sub-problems
// - How to merge 2 array


// const calcTempAmplitudeBug = function (t1, t2) {
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

// // calcTempAmplitudeBug([3,7,4, 1, 8])

// const amplitudeNew = calcTempAmplitudeBug([3,5,1], [9,0,5]);
// console.log(amplitudeNew);

const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: prompt('degress celsius:'),
    }

    // console.table(measurement);

    const kelvin = Number(measurement.value) + 273;

    return kelvin;
}

// console.log(measureKelvin());