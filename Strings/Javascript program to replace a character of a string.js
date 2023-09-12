// Javascript program to replace a character of a string 

const string = 'Mr Red has a red house and a red car';

// replace the characters
const newText = string.replace('red', 'blue');

// display the result
console.log(newText);

/* NOTE:- When a string is passed in the replace() method, it replaces only the first instance of the string.
          So if there is a second match in the string, it won't be replaced.*/



// program to replace a character of a string using reges

const str = 'Mr Red has a red house and a red car';

// regex expression
const regex = /red/g;

// replace the characters
const Text = string.replace(regex, 'blue');

// display the result
console.log(Text);

/* NOTE:-  /g refers to global. It means that all the matching characters in the string are replaced.
           Since JavaScript is case-sensitive, R and r are treated as different values. */