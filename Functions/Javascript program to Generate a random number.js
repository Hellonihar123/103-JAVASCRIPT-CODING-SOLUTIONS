// Javascript program to Generate a random number between a range

const max = parseInt(prompt("Enter a max value : "));
const min = parseInt(prompt("Enter a min value : "));

const random = Math.floor(Math.random() * (max - min)) + 1;

console.log(` Random number between ${min} and ${max} is ${random}`);




