const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------';

// Only change below this line

const owed = parseInt(leoBalance) + parseInt(sarahBalance);
// console.log(`R ${owed.toFixed(2)}`);


const leo = `${leoName} ${leoSurname} Owed: R${leoBalance  * - 1}`;
// console.log(leo)


const sarah = `${sarahName} ${sarahSurname} Owed: R${parseInt(sarahBalance  * - 1)}`;
// console.log(sarah)


const total = `Total amount owed: R ${owed * - 1}`;
// console.log(total)


const result = leo + '\n' + sarah  + '\n' + divider + '\n' + `   Total amount owed: R ${owed.toFixed(2) * - 1}` + '\n' + divider;

console.log(result);