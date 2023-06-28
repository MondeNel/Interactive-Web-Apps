const value = parseInt("3");

console.log(value); // before I parsed it to an Integer, 3 was just a string.
console.log(typeof value); // after parseInt, the data type is a Number.
console.log(value + 4 + value); // here I concatenate the data types to perform some calculation