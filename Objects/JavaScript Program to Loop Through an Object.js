// JavaScript Program to Loop Through an Object

const person ={
    name : 'Nihar',
    age : 26,
    hobbies : ['games', 'coading', 'hiking'],

    greet: function(){
        console.log('Hello Everyone');
    },

    score: {
        maths: 70,
        science: 90
    }

};


//Using for..in loop
for(let key in person){
    let value = person[key];
    console.log(key + " - " +  value); 
 }

//using for..in loop with hasOwnProperty()
 for(let key in person){
    if (person.hasOwnProperty(key)) {
        console.log(`${key}: ${person[key]}`);
      }
 }

 
//Looping keys with Object.keys() method
//Object.keys() method was introduced in ES6.
//t takes the object we want to loop over as an argument and returns an array containing all property names (also known as keys).
 let info = Object.keys(person);

 info.forEach((key) => console.log(key));

 
//Looping values of object with Object.values() 
//Object.values() method was introduced in ES8.
//This method takes the Object we want to loop over as an argument and returns an array containing all key values
let infoVal = Object.values(person);

infoVal.forEach((val) => console.log(val));


//Using Object.entries method
//The Object.entries() method was also introduced with ES8. In the basic sense, what it does is that it outputs an array of arrays
let infoProperty = Object.entries(person);

infoProperty.forEach((key , val) => console.log(key, val));