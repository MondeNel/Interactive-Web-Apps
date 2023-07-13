let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below

/**
 * 
 * The conditional statement typeof calculated is missing a comparison operator.
 * It should be typeof calculated === 'string' to check if calculated is a string.
 */


const logCalc = (calculated) => { 
    
// we performed a tenary expression to check if calculated is a numerical string
const isString = calculated === "string" ?  'numerical-string' : 'not a muerical-string' ; 

// we re-assigned it to a number(Integer), to perform some calculation.
const calculatedAsNumber = parseInt(calculated);

console.log(calculated === calculatedAsNumber + 1); 
}



const calcUser =  () => { // the function was not defined/assigned properly (const = calcUser () => {}) 

  // calculated is a string variable of "1", we changed it into an integer to perform expressions
  if (parseInt(calculated) <= 2) user = 'John';    
  if (parseInt(calculated) >= 2) state = 'requesting';
  if (parseInt(calculated) <= 3) state = 'idle';
}


const checkUser = () => {

	if (user && state !== 'requesting') {

		console.log(`User: ${user} (${calculated})`);

	}
}

// // Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()