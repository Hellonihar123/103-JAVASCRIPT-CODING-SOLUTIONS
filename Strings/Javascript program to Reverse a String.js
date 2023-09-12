// Javascript program to Reverse a String


function reverseString(str) {

    // empty string
    let newString = "";

    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}


const string = prompt('Enter a string: ');

const result = reverseString(string);
console.log(result);


// program to reverse a string using Built-in Methods

function reverseString(str) {

    // return a new array of strings
    const arrayStrings = str.split("");
   
    // reverse the new created array elements
    const reverseArray = arrayStrings.reverse();
 
    // join all elements of the array into a string
    const joinArray = reverseArray.join("");
    
    // return the reversed string
    return joinArray;
}
 
// take input from the user
const str = prompt('Enter a string: ');

const res = reverseString(str);
console.log(res);