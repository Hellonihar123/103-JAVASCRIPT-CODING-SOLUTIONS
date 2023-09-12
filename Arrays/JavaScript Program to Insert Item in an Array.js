// JavaScript Program to Insert Item in an Array

//Example 1: Add Item to Array Using splice()

function insertElement() {
    let array = [1, 2, 3, 4, 5];

    // index to add to
    let index = 3;

    // element that you want to add
    let element = 8;
  
    array.splice(index, 0, element);
    console.log(array);
}

insertElement();

//Example 2: Add Item to Array Using for Loop

function insertElement() {
    let array = [1, 2, 3, 4];

    // index to add to
    let index = 3;

    // element that you want to add
    let element = 8;
  
    for (let i = array.length; i > index; i--) {

        //shift the elements that are greater than index
        array[i] = array[i-1];
    }

    // insert element at given index
    array[index] = element;

    console.log(array);
}

insertElement();