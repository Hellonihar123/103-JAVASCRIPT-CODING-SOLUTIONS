
//JavaScript Program to Generate Random String

//Example 1:
//declare all characters
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

console.log(generateString(5));


//Example 2: Generate Random Strings Using Built-in Methods

const result = Math.random().toString(36).substring(2,7);
console.log(result);

/*The Math.random() method generates the random number between 0 and 1.

In toString(36) method, 36 represents base 36. The toString(36) represents digits beyond 9 by letters.

The substring(2, 7) method returns five characters.*/ 