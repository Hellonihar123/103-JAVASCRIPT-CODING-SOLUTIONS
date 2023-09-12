// Javascript program to Find The Sum Of Natural Numbers

//Using For Loop

const number = parseInt(prompt('Enter a positive integer: '));

let sum = 0;

// looping from i = 1 to number
// in each iteration, i is increased by 1
for (let i = 1; i <= number; i++) {
    sum += i;
}

console.log('The sum of natural numbers:', sum);






//Using While Loop


const num = parseInt(prompt('Enter a positive integer: '));

let result = 0, i = 1;

// looping from i = 1 to number
while(i <= num) {
    result += i;
    i++;
}

console.log('The sum of natural numbers:', result);