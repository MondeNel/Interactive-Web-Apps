const primaryPhone = 'O748105141';
const secondaryPhone = '0219131568';

// Only change below this line

let number = undefined; // Assign a value to number


if(primaryPhone === parseInt(number)){
    console.log('Primary phone is valid numerical string:', true);
}else {
    console.log('Primary phone is not valid numerical string:', false);
}

if(secondaryPhone !== parseInt(number)){
    console.log('Secondary phone is valid numerical string:', true);
}else {
    console.log('Secondary phone is not valid numerical string:', false);
}


console.log(parseInt(number)); // Is Not a Number
console.log(parseInt(primaryPhone)); // Is Not a Number
console.log(parseInt(secondaryPhone)); // Is a Number