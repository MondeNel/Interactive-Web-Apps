const primaryPhone = 'O748105141';
const secondaryPhone = '0219131568';

// Only change below this line

let number = undefined; // Assign a value to number
console.log(parseInt(number));

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
