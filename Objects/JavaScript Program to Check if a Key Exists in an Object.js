

//JavaScript Program to Check if a Key Exists in an Object

const person = {
    id: 1,
    name: 'John',
    age: 23
}

// check if key exists
const hasKey = 'name' in person;

if(hasKey) {
    console.log('The key exists.');
}
else {
    console.log('The key does not exist.');
}


                               

//  Check if Key Exists in Object Using hasOwnProperty()

const person1 = {
    id: 1,
    name: 'John',
    age: 23
}

//check if key exists
const hasKey1 = person1.hasOwnProperty('name');

if(hasKey1) {
    console.log('The key exists.');
}
else {
    console.log('The key does not exist.');
}