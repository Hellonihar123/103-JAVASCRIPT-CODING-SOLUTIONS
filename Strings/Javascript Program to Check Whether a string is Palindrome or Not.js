// Javascript Program to Check Whether a string is Palindrome or Not


function checkPalindrome(string){
    const len = string.length;

    for(let i=0; i<len/2; i++){
        if(string[i] !== string[len-1-i]){
            return 'It is not a palindrom';
        }
    }
    return 'It is a palindrom';
}
const str = prompt('Enter a string: ');
// const string = 'abba';

const result = checkPalindrome(string);
console.log(result);



//Using Built-in Function


function checkPalindrome(string) {

    // convert string to an array
    const arrayValues = string.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}

//take input
const string = prompt('Enter a string: ');

checkPalindrome(string);