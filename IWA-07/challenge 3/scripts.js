const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

let owed = ('R' + Number(leoBalance) + ' R' + Number(sarahBalance))
let balance_owed = leoBalance * -1 + sarahBalance * -1
console.log(balance_owed.toFixed(2))


let leo = `${leoName} ${leoSurname} owed: R${leoBalance * -1}`
let leoBalanceNew = leoBalance * -1
leoBalanceNew = console.log('R',leoBalanceNew)

let sarah = `${sarahName} ${sarahSurname} owed: R${sarahBalance * -1}`
let sarahBalanceNew = sarahBalance * -1
sarahBalanceNew = console.log('R',sarahBalanceNew.toFixed(2))

let total = `Total amount owed: ${balance_owed}`
total = console.log('R',balance_owed.toFixed(2))

let result = 'leo'+ '\n' + 'sarahnewbalance' + '\n' +'\n' + divider + '\n' + '   Total amount owed: ' + 'R' + balance_owed.toFixed(2) + '\n' + divider

console.log(result)