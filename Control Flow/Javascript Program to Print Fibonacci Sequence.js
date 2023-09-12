// Javascript Program to Print Fibonacci Sequence

// Up to n terms
const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

// Up to a certain number

const num = parseInt(prompt('Enter a positive number: '));
let num1 = 0, num2 = 1, nextnum;

console.log('Fibonacci Series:');
console.log(num1); // print 0
console.log(num2); // print 1

nextnum = n1 + n2;

while (nextTerm <= num) {

    // print the next term
    console.log(nextnum);

    num1 = num2;
    num2 = nextnum;
    nextnum = num1 + num2;
}