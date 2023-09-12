// Javascript program to check if a number is Odd or Even


let num = parseInt(prompt("Enter a Number :"));

if( num % 2 == 0){
    console.log(`${num} is a even number`);

}
else{
    console.log(`${num} is a odd number`);

}

// Usding Ternary Operator

let num1 = parseInt(prompt("Enter a Number :"));

let result = (num1 % 2 == 0) ? "even" : "odd" ;

console.log(`The number is a ${result}`);
