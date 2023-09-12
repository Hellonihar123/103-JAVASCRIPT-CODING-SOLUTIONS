// JavaScript Program to Clone a JS Object
// reference:-https://www.freecodecamp.org/news/clone-an-object-in-javascript/

//Example 1. Clone the Object Using Object.assign()
const person = {
    name: 'John',
    age: 21,
}

// cloning the object
const clonePerson = Object.assign({}, person);

console.log(clonePerson);

// changing the value of clonePerson
clonePerson.name = 'Peter';

console.log(clonePerson.name);
console.log(person.name);



//Example 2:-Clone the Object Using Spread Syntax

const person1 = {
    name: 'John',
    age: 21,
}

// cloning the object
const clonePerson = { ... person1}

console.log(clonePerson);

// changing the value of clonePerson
clonePerson.name = 'Peter';

console.log(clonePerson.name);
console.log(person1.name);


/*Note: When you use the spread operator or Object.assign() method 
        to clone a deep object, the deeper objects will be referenced. */

//Example 3: Clone the Object Using JSON.parse()

const userDetails = {
    name: "John Doe",
    age: 14,
    status: {
      verified: false
    }
  };
  
  
  let cloneUser = JSON.parse(JSON.stringify(userDetails));
  
  // Changing the value of cloneUser
  cloneUser.status.verified = true;
  
  console.log(cloneUser); // {name: 'John Doe', age: 14, status: {verified: true}}
  console.log(userDetails); // {name: 'John Doe', age: 14, status: {verified: false}}

  /*Note: JSON.parse() only works with Number and String object literal.
          It does not work with an object literal with function or symbol properties.*/