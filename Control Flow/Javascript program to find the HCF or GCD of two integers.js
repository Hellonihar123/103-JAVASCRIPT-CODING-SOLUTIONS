// Javascript program to find the HCF or GCD of two integers
// Using For Loop
let hcf;

const number1 = prompt('Enter a first positive integer: ');
const number2 = prompt('Enter a second positive integer: ');

// looping from 1 to number1 and number2
for (let i = 1; i <= number1 && i <= number2; i++) {

    // check if is factor of both integers
    if( number1 % i == 0 && number2 % i == 0) {
        hcf = i;
    }
}

// display the hcf
console.log(`HCF of ${number1} and ${number2} is ${hcf}.`);




//Using While Loop

let num1 = prompt('Enter a first positive integer: ');
let num2 = prompt('Enter a second positive integer: ');

// looping until both numbers are equal
while(num1 != num2){
    if(num1 > num2) {
        num1 -= num2;
    }
    else {
        num2 -= num1;
    }
}

// display the hcf
console.log(`HCF is ${num1}`);