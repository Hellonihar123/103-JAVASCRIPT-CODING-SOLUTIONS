// JavaScript Program to Count the Number of Keys/Properties in an Object

//Example 1: Count the Number of Key in an Object Using for...in

const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

let count = 0;

// loop through each key/value
for(let key in student) {

    // increase the count
    ++count;
}

console.log(count);


//While using the for...in loop, it will also count inherited properties.
const student1 = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

const person = {
    gender: 'male'
}

student1.__proto__ = person;

let count1 = 0;

for(let key in student1) {

    // increase the count
    ++count1;
}

console.log(count1); // 4


//Example 2: Count the Number of Key in an Object Using Object.key()
const student2 = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

// count the key/value
const result = Object.keys(student2).length;

console.log(result);