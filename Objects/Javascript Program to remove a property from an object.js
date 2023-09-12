// Javascript Program to remove a property from an object


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

// deleting a property from an object
delete person.greet;
delete person['score'];

console.log(student);