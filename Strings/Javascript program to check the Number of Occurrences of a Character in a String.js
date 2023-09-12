//Javascript program to check the Number of Occurrences of a Character in a String

function checkOccurrence(string ,ch){
    let count = 0;
    for(let i= 0; i< string.length; i++){
     if(ch == string[i]){
         count = count +1;

     }
    }
    return count;

}
// const string = prompt('Enter a string:');
// const ch = prompt('Enter a char you want to check number of Occurrance:');
const string ='uguhgfuhzguhgfygfuhg';
const ch ='u';

let result = checkOccurrence(string , ch);

console.log(`Number of Occurrence of ${ch} is ${result}`);




// program to check the occurrence of a character Using Regex 

function countString(str, letter) {

    // creating regex 
    const re = new RegExp(letter, 'g');

    // matching the pattern
    const count = str.match(re).length;

    return count;
}

// take input from the user
const str = prompt('Enter a string: ');
const letterToCheck = prompt('Enter a letter to check: ');

//passing parameters and calling the function
const res = countString(string, letterToCheck);

// displaying the result
console.log(result);