// JavaScript Program to Add Key/Value Pair to an Object

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

person.height = 5.8; //using dot notation

person['weight'] = 70 ; // using square bracket

console.log(person);