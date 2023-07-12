const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------';

// Only change below this line

const owed = parseInt(leoBalance) + parseInt(sarahBalance); // I used parseInt to convert a string to a number to calculate the result
// console.log(`R ${owed.toFixed(2)}`);


const leo = `${leoName} ${leoSurname} Owed: R${leoBalance  * - 1}`; // I made use of a template literal for much better readng of code and also to perform some calculations
// console.log(leo)


const sarah = `${sarahName} ${sarahSurname} Owed: R${parseInt(sarahBalance  * - 1)}`;
// console.log(sarah)


const total = `Total amount owed: R ${owed * - 1}`;
// console.log(total)


const result = leo + '\n' + sarah  + '\n' + divider + '\n' + `   Total amount owed: R ${owed.toFixed(2) * - 1}` + '\n' + divider;
// in the above code, I used new line character to perform the output results. 
//And rounded the number to two decimals by using the toFixed method which converts the number to a string.

console.log(result);