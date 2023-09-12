//JavaScript Program to Replace All Occurrences of a String


//Using Regex
const string = 'Mr Red has a red house and a red car';

// regex expression
const regex = /red/gi;

// replace the characters
const newText = string.replace(regex, 'blue');

// display the result
console.log(newText);



//Using Built-in method
const string1 = 'Mr red has a red house and a red car';

const result = string1.split('red').join('blue');

console.log(result);