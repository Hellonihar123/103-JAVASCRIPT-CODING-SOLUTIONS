

// JavaScript Program to Check Whether a String Starts and Ends With Certain Characters

// program to check if a string starts with 'S' and ends with 'G'

function checkString(str) {

    // check if the string starts with S and ends with G

    // The startsWith() method checks if the string starts with the particular string.
    // The endsWith() method checks if the string ends with the particular string.

    if(str.startsWith('S') && str.endsWith('G')) {
        console.log('The string starts with S and ends with G');
    }
    else if(str.startsWith('S')) {
        console.log('The string starts with S but does not end with G');
    }
     else if(str.endsWith('G')) {
        console.log('The string starts does not with S but end with G');
    }
    else {
        console.log('The string does not start with S and does not end with G');
    }
}


// take input
let string = prompt('Enter a string: ');
checkString(string);



// program to check if a string starts with 'S' and ends with 'G' .Check The String Using Regex

function checkString(str) {

   
    if( /^S/i.test(str) && /G$/i.test(str)) {
        console.log('The string starts with S and ends with G');
    }
    else if(/^S/i.test(str)) {
        console.log('The string starts with S but does not ends with G');
    }
     else if(/G$/i.test(str)) {
        console.log('The string starts does not with S but ends with G');
    }
    else {
        console.log('The string does not start with S and does not end with G');
    }
}

// for loop to show different scenario
for (let i = 0; i < 3; i++) {

    // take input
    const string = prompt('Enter a string: ');

    checkString(string);
}

/*NOTE:-A regular expression (RegEx) is used with the test() method to check if the string starts with S and ends with G.
        The /^S/i pattern checks if the string is S or s. Here, i denotes that the string is case-insensitive. Hence, S and s are considered the same.
        The /G$/i patterns checks if the string is G or g. */