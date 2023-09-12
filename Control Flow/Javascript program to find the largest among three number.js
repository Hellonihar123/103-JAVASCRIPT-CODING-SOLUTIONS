// Javascript program to find the largest among three number

let num1 = parseFloat(prompt("Enter first Number :"));
let num2 = parseFloat(prompt("Enter second Number :"));
let num3 = parseFloat(prompt("Enter third Number :"));

let largest;

if(num1 >= num2 && num1 >= num3){
    console.log(`${num1} is the largest number`);
}
else if(num2 >= num1 && num2 >= num3) {

    console.log(`${num2} is the largest number`);

}else{
    console.log(`${num3} is the largest number`);
}


// Using math.max()

let n1 = parseFloat(prompt("Enter first Number :"));
let n2 = parseFloat(prompt("Enter second Number :"));
let n3 = parseFloat(prompt("Enter third Number :"));

const largestNumber = Math.max(n1 , n2, n3);

console.log(`${largestNumber} is the largest number`);

