// Javascript program to Find ASCII Value Of Character

//Using charCodeAt()

const char = prompt("Enter a character: ");
const result = char.charCodeAt(char);

console.log(`The ASCII value of character${char} is ${result}`);

//Using codePointAt()

const ch = prompt("Enter a character: ");
const res = char.charCodeAt(char);

console.log(`The ASCII value of character${ch} is ${res}`);
