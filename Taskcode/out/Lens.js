"use strict";
function hashAlgorithm(s) {
    if (s === undefined || s === null) {
        return 0; // or handle the case when the input string is undefined or null
    }
    let currentValue = 0;
    for (let i = 0; i < s.length; i++) {
        currentValue += s.charCodeAt(i);
        currentValue *= 17;
        currentValue %= 256;
    }
    return currentValue;
}
function calculateSum(initializationSequence) {
    if (!initializationSequence) {
        return 0; // or handle the case when the initialization sequence is undefined or empty
    }
    const steps = initializationSequence.split(',');
    let totalSum = 0;
    for (const step of steps) {
        const [key, value] = step.split('=');
        totalSum += hashAlgorithm(value);
    }
    return totalSum;
}
const initializationSequence = "rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6,ot=7";
const resultSum = calculateSum(initializationSequence);
console.log("The sum of the results is:", resultSum);
