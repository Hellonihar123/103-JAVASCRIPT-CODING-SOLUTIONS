// Javascript program to find Sum of Natural Number Using Recursion

const number = parseInt(prompt("Enter a  Positive Integer number: "));

//const number = 5;

let sum=0;

function sumOf(number){

   if(number > 0){
   return number + sumOf(number-1);
   }
   else{
    return number;
   }
}
 const result = sumOf(number);

 console.log(`The sum is ${result}`);