// javascript to Creat Object in Different Ways


// Using Object Literal
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

person.greet();
console.log(person.name);
console.log(person.age);
console.log(person.hobbies[2]);
console.log(person.score.maths);



//Create an Object using Instance of Object Directly

const person1 = new Object({
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

});

person1.greet();
console.log(person1.name);
console.log(person1.age);
console.log(person1.hobbies[2]);
console.log(person1.score.maths);



// Create an object using Constructor Function
function Person1() {
    this.name = 'Nihar',
    this.age = 26,
    this.hobbies = ['games', 'coading', 'hiking'],

    this.greet=function(){
        console.log('Hello Everyone');
    },

    this.score= {
        maths: 70,
        science: 90
    }
}

const person2 = new Person1();

console.log(typeof Person1);
console.log(person2.name);
console.log(person2.age);
console.log(person2.hobbies[0]);
console.log(person2.score.science);