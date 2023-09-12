//JavaScript Program to Compare Two Strings

//Example 1: Using toUpperCase()
const string1 = 'JavaScript Program';
const string2 = 'javascript program';

// compare both strings
const result = string1.toUpperCase() === string2.toUpperCase();

if(result) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}

//Example 2: JS String Comparison Using RegEx

const string3 = 'JavaScript Program';
const string4 = 'javascript program';

// create regex
const pattern = new RegExp(string3, "gi");

// compare the stings
const result1 = pattern.test(string4)

if(result) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}

//Example 3: Using localeCompare()

// const string1 = 'JavaScript Program';
// const string2 = 'javascript program';

const result2 = string1.localeCompare(string2, undefined, { sensitivity: 'base' });

if(result == 0) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}

/*  The localeCompare() method is used to perform case insensitive string comparison.

    The localeCompare() method returns a number that indicates whether a reference string comes before, or after, or is the same as the given string.

    Here, { sensitivity: 'base' } treats A and a as the same.*/