//JavaScript Program to Add Element to Start of an Array

//Example 1: Add Element to Array Using unshift()
function addElement(arr) {

    // adding new array element
    arr.unshift(4);
    
    console.log(arr);
}

const array = [1, 2, 3];
addElement(array);



//Example 2: Add Element to Array Using splice()

function addElement2(arr) {

    // adding element to array
    arr.splice(0, 0, 4);
    
    console.log(arr);
}

const array2 = [1, 2, 3];

// calling the function
addElement2(array2);




//Example 3: Add Element to Array Using Spread Operator

function addElement3(arr) {

    // adding element to array
    arr = [4, ...arr];
    
    console.log(arr);
}

const array3 = [1, 2, 3];

addElement3(array3);