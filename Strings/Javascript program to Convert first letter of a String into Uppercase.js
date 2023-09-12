// Javascript program to Convert first letter of a String into Uppercase


function capitalizeFirstLetter(str) {

    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}


const string = prompt('Enter a string: ');

const result = capitalizeFirstLetter(string);

console.log(result);





//Convert First letter to UpperCase using Regex

function capitalizeFirstLetter(str) {

    // converting first letter to uppercase
    const capitalized = str.replace(/^./, str[0].toUpperCase());
    //The regex pattern is /^./ matches the first character of a string.


    return capitalized;
}

// take input
const str = prompt('Enter a string: ');

const res = capitalizeFirstLetter(str);

console.log(res);