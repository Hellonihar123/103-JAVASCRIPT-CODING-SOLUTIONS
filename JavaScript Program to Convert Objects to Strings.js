//JavaScript Program to Convert Objects to Strings

//Example 1: Convert Object to String Using JSON.stringify()

const person = {
    name: 'Jack',
    age: 27
}

const result =  JSON.stringify(person);

console.log(result);
console.log(typeof result);


//Example 2: Convert Object to String Using String()

const person1 = {
    name: 'Jack',
    age: 27
}

const result1 = String(person1);
const result2 = String(person1['name']);

console.log(result1);
console.log(result2);

console.log(typeof result1);