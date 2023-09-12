// JavaScript Program to Merge Property of Two Objects

//Example 1: Merge Property of Two Objects Using Object.assign()

// object 1
const person = {
    name: 'Jack',
    age:26
}

// object 2
const student = {
    gender: 'male'
}

// merge two objects
const newObj = Object.assign(person, student);

console.log(newObj);



// Example 2: Merge Property of Two Objects Using Spread Operator

// object 1
const person1 = {
    name: 'Jack',
    age:26
}

// object 2
const student1 = {
    gender: 'male'
}

// merge two objects
const newObject = {...person1, ...student1};

console.log(newObject);