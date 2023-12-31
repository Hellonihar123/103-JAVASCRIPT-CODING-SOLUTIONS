
//JavaScript Program to Check if An Array Contains a Specified Value

//Example 1: Check Array Using includes()

const array = ['you', 'will', 'learn', 'javascript'];

const hasValue = array.includes('javascript');

// check the condition
if(hasValue) {
    console.log('Array contains a value.');
} else {
    console.log('Array does not contain a value.');
}


// Example 2:-Check Array Using indexOf()
const array1 = ['you', 'will', 'learn', 'javascript'];

const hasValue1 = array1.indexOf('javascript') !== -1; 
// The indexOf() method searches an array and returns the position of the first occurrence. 
// If the value cannot be found, it returns -1.
// check the condition
if(hasValue1) {
    console.log('Array contains a value.');
} else {
    console.log('Array does not contain a value.');
}

//Both includes() and indexOf() are case sensitive. Hence, J and j are different.