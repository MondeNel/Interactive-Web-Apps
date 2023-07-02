const leoName = 'Leo Musvaire';
const leoNumber = '2';
const leoStreet = 'Church St.';
const leoPostal = '3105';
const leoBalance = '-10';

const sarahName = 'Sarah';
const sarahSurname = 'Kleinhans';
const sarahBalance = '-4582.21000111';
const sarahNumber = '13';
const sarahStreet = 'William Close';
const sarahPostal = '0310';

// Only change below this line

const leo = {
  name: leoName,
  balance: leoBalance,
  access_id: '47-afb389-8014-4-d0b-aff3-e40203d2107f', // I changed this to a string, because a string can consist of numbers and letters
  age: 24,
  address: {
    number: leoNumber,
    street: leoStreet,
    postalCode: leoPostal,
  },
};
console.log(leo.name)
console.log(leo.balance)
console.log(leo.access_id)
console.log(leo.age)
console.log(leo.address.number)
console.log(leo.address.street)
console.log(leo.address.postalCode)



const sarah = {
  name: `${sarahName} ${sarahSurname}`,
  age: 62,
  access_id: '6b279ae5-5657-4240-80e9-23f6b635f7a8', // I changed this to a string, because a string can consist of numbers and letters
  balance: sarahBalance,
  address: {
    number: sarahNumber,
    street: sarahStreet,
    postalCode: sarahPostal,
  },
};
console.log(sarah.name)
console.log(sarah.age)
console.log(sarah.access_id)
console.log(sarah.balance)
console.log(sarah.address.number)
console.log(sarah.address.street)
console.log(sarah.address.postal_code)

console.log(leo); 
console.log(leo.address.postalCode);

console.log(sarah);
console.log(sarah.address.postalCode);
