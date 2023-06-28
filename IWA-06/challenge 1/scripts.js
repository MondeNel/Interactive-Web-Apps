const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line
let number;

const primaryValid = (number !== parseInt(primaryPhone) ? true : false)
const secondaryValid = (number !==  parseInt(secondaryPhone) ? true : false)


console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )