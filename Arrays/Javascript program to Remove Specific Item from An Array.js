// Javascript program to Remove Specific Item from An Array

//Example 1:- Using For Loop

function removeItem(array,n){
    let newArray= [];

    for(let i=0; i<array.length; i++){
        if(array[i] !== n){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

const result1 = removeItem([1,2,3,4,5,6,2],2);
console.log(result1);

//Example 2: Using Array.splice()

function removeItemFromArray(array, n) {
    const index = array.indexOf(n);

    // if the element is in the array, remove it
    if(index > -1) {

        // remove item
        array.splice(index, 1);//array.splice(index, howmany[optional], item1, ....., itemX[items to add])
    }
    return array;
}

const result = removeItemFromArray([1, 2, 3 , 4, 5], 2);

console.log(result);

/*Note: The above program only works for arrays without duplicate elements.

        Only the first element of an array that matches is removed.*/

