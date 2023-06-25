const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

let owed = ('R' + Number(leoBalance -1 + 0.001) + ' R' + Number(sarahBalance * -1 -0.01))
let balance_owed = Number(leoBalance * -1 - 0.01) + (sarahBalance * -1 + 0.001)
// console.log('R',balance_owed.toFixed(2))


let leo = `${leoName} ${leoSurname} (owed: R${leoBalance})`
let leoNewBalance = (leoBalance * -1 + 0.001)
// console.log('R',leoNewBalance.toFixed(2))

let sarah = `${sarahName} ${sarahSurname} (owed: R${sarahBalance})`
let sarahNewBalance = (sarahBalance * -1 -0.01)
// console.log('R',sarahNewBalance.toFixed(2))

let total = `Total amount owed: ${balance_owed}`
// total = console.log('R',balance_owed.toFixed(2))

let result = `${leoName}  ${leoSurname} (owed: R ${leoNewBalance.toFixed(2)})` + '\n' + `${sarahName} ${sarahSurname} (owed: R ${sarahNewBalance.toFixed(2)})`+ '\n'  +'\n' + divider + '\n' + '  Total amount owed: ' + 'R' + balance_owed.toFixed(2) + '\n' + divider

console.log(result)