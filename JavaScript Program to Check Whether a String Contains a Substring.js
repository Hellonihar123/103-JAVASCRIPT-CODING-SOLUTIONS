//JavaScript Program to Check Whether a String Contains a Substring

//Example 1:-Check String with includes()
//Note: The includes() method is case-sensitive. Hence, fun and Fun are different.

const str = prompt('Enter a string:');
const checkString = prompt('Enter a string that you want to check:');

// check if string contains a substring
if(str.includes(checkString)) {
    console.log(`The string contains ${checkString}`);
} else {
    console.log(`The string does not contain ${checkString}`);
}


//Example 2:-Check String with indexOf()
const str1 = prompt('Enter a string:');
const checkString1 = prompt('Enter a string that you want to check:');

// check if string contains a substring
if(str1.indexOf(checkString1) !== -1) {
    console.log(`The string contains ${checkString1}`);
} else {
    console.log(`The string does not contain ${checkString1}`);
}

//The indexOf() method searches a string and returns the position of the first occurrence. 
//When a substring cannot be found, it returns -1. indexOf() is also case sensitive.

