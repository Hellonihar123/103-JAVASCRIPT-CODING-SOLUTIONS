// Javascript program to find factorial of a number

let number = parseInt(prompt('Enter a number:'));

function factorial(number){
    let ans = 1;

    if(number === 0)
        return 1;
    
    for( let i = 2; i<= number; i++) {
        ans = ans * i;
        
    }
    return ans;
}

console.log(`Factorial of ${number} is :`, factorial(number));

//Using Recursive Method

let num = parseInt(prompt('Enter a number:'));

function fact(num){

   if(num === 0){
    return 1;
   }

   else{
    return num * fact(num -1);
   }

}
console.log(`Factorial of ${num} is :`, fact(num));


