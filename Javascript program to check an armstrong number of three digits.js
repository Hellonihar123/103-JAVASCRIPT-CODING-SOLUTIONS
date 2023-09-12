// Javascript Program To Check Armstrong Number


let sum = 0;
const number = parseInt(prompt("Enter a three digit positive number: "));

let temp = number;
while(temp>0){
    let reminder = temp % 10;
    sum = sum + (reminder* reminder* reminder );

    temp = parseInt(temp / 10);

}

if (sum == number){
    console.log(` ${number} is an armstrong number.`);
}
 else{
    console.log(` ${number} is not an armstrong number.`);
}
 

// program to check amstrong number of n digit

let result = 0;
const num = parseInt(prompt("Enter a  positive number: "));
const numLength = num.length;

let temp1 = number;
while(temp1 >0){
    let reminder = temp1 % 10;
    sum = sum + (reminder ** numLength );

    temp1 = parseInt(temp1 / 10);

}

if (result == num){
    console.log(` ${num} is an armstrong number.`);
}
 else{
    console.log(` ${num} is not an armstrong number.`);
}