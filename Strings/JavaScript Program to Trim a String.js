// JavaScript Program to Trim a String

const string = '      Hello World       ';

const result = string.trim();

console.log(result);

//Using RegEx


function trimString(x) {
    let trimValue = x.replace(/^\s+|\s+$/g,'');
    return trimValue;
}

const result1 = trimString('    Hello world    ');
console.log(result1);