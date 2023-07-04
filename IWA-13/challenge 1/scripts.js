let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below

/**
 * 
 * @param {The variable calculated is not defined within the function. 
 * we will need to either pass it as a parameter or define it within the function for the code to work.} calculated 
 * 
 * The conditional statement typeof calculated is missing a comparison operator.
 * It should be typeof calculated === 'string' to check if calculated is a string.
 */

function logCalc(calculated) {

  let isString;

  if (typeof calculated === 'string') {
    isString = 'numerical-string';
  } else {
    isString = 'not a numerical-string';
  }

  let calculatedAsNumber;

  if (isString === 'numerical-string') {
    calculatedAsNumber = parseInt(calculated);
  } else {
    calculatedAsNumber = calculated;
  }

}


const = calcUser () => {
  logCalc
  if (calculated > 2) user = 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
}

const = checkUser () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
}

// Only allowed to change code above

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