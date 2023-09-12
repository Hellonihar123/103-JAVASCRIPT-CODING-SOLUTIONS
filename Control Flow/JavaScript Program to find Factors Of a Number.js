// JavaScript Program to find Factors Of a Number

//Using for loop

let num = prompt("Enter a positive number: ");
console.log(`the Factor of ${num}`);

for ( let i =1; i<= num; i++){
    if(num % i == 0){
        console.log(i);

    }
}

