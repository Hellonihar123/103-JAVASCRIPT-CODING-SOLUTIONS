// Javascript Program to check prime number

let num = parseInt(prompt("Enter a number :"));
isPrime= true;

// check if number is equal to 1
if(num === 1){
    console.log("1 is neither prime nor  composite number.");

}

// check if number is greater than 1
else if(num > 1){
    for(let i=2; i< num; i++){

        if(num % i == 0){
            isPrime = false;
            break;
        }
    }
    
    if(isPrime){
        console.log(`${num} is a prime number.`);
    }else{
        console.log(`${num} is not a prime number.`);
    }
    
    
}
// check if number is less than 1
else{
    console.log(`${num} is not a prime number.`);
}