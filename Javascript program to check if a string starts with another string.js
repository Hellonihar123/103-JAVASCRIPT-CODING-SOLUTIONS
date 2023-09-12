// Javascript program to check if a string starts with another string

//Example 1:-Using startsWith()

const string = 'hello world';

const toCheckString = 'he';

if(string.startsWith(toCheckString)) {
    console.warn('The string starts with "he".');
}
else {
    console.warn(`The string does not starts with "he".`);
}



//Example 2:-Using lastIndexOf()
const string1 = 'hello world';

const toCheckString1 = 'he';

let result = string.lastIndexOf(toCheckString1, 0) === 0;
if(result) {
    console.warn('The string starts with "he".');
}
else {
    console.warn(`The string does not starts with "he".`);
}


//Example 3:-Using RegEx
const string2 = 'hello world';

const pattern = /^he/;                                                                                                                                                                                                                                                                                                      

let result2 = pattern.test(string2);

if(result) {
    console.warn('The string starts with "he".');
}
else {
    console.warn(`The string does not starts with "he".`);
}