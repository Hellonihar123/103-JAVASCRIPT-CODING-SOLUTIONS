// Javascript program to Swap two variables




// using a temporary variable
let a = prompt("Enter the first variable :");
let b = prompt('Enter the second variable : ');

let temp;
 
temp = a;
a = b;
b = temp;

console.log(` The value of a after swapping : ${a}`);
console.log(` The value of b after swapping : ${b}`);

// Using Destructuring assignment

let a1 = prompt("Enter the first variable :");
let b1 = prompt('Enter the second variable : ');
 
[a1, b1] =[b1 , a1];


console.log(` The value of a1 after swapping : ${a1}`);
console.log(` The value of b1 after swapping : ${b1}`);


// Using Arithmetic operators

let a2 = parseInt(prompt("Enter the first variable :"));
let b2 = parseInt(prompt('Enter the second variable : '));

a2 = a2 + b2;
b2 = a2 - b2;
a2 = a2 - b2;

console.log(` The value of a2 after swapping : ${a2}`);
console.log(` The value of b2 after swapping : ${b2}`);




// Using Bitwise XOR operator

let a3 = parseInt(prompt("Enter the first variable :"));
let b3 = parseInt(prompt('Enter the second variable : '));

a3 = a3 ^ b3;
b3 = a3 ^ b3;
a3 = a3 ^ b3;

console.log(` The value of a3 after swapping : ${a3}`);
console.log(` The value of b3 after swapping : ${b3}`);
