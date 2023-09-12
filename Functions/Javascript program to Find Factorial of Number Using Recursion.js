// Javascript program to Find Factorial of Number Using Recursion

const number = parseInt(prompt("Enter a integer: "));
// const number= 5;

function fact (number){
    if(number ==0){
        return 1;
    } 
    else{
        return  number * fact(number -1);

    }
}
let result = fact(number);
console.log(`Factorial of integer ${number} is ${result}`);
