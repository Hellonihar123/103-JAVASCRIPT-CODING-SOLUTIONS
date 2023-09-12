//JavaScript Program to Remove Duplicates From Array

//Example 1: Using indexOf() and push()

function getUnique(arr){
    
    let uniqueArr = [];
    
    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
            //The indexOf() method returns -1 if the element is not in the array. Hence, during each iteration, if the element equals -1, the element is added to uniqueArr using push().
        }
    }
    console.log(uniqueArr);
}

const array = [1, 2, 3, 2, 3];

getUnique(array);


//Example 2: Using Set
//The array is converted to Set and all the duplicate elements are automatically removed.
function getUnique1(arr){

    // removing duplicate
    let uniqueArr = [...new Set(arr)];

    console.log(uniqueArr);
}

const array1 = [1, 2, 3, 2, 3];

// calling the function
getUnique1(array1);