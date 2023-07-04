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

/** This is an example of a function I wrote myself to compare it to the challenge.
 * 
 * let firstName = "Monde";

  function myFnc (){
    let lastname = 'Nel';
    
    console.log(firstName + " " + lastname);
}
myFnc(); 
*/


let logCalc = () => { 
    
  // we performed a tenary expression to check if calculated is a numerical string
  let isString = typeof calculated === "string" ?  'numerical-string' : 'not a muerical-string' ; 


  // we re-assigned it to a number(Integer), to perform some calculation.
  let calculatedAsNumber = parseInt(calculated);

  console.log(calculated === calculatedAsNumber + 1); 
}
// logCalc();


let calcUser =  () => { // the variable was not defined/assigned properly. 

  if (calculated.length <= 2) user = 'John';  // logical operator less than or  equal too.
  if (calculated.length >= 2) state = 'requesting';
  if (calculated.length >= 3) state = 'idle';

  // console.log(user);
  // console.log(state);
  // console.log(state);
}
// calcUser();

let checkUser = () => {
	if (user && state !== 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
  // console.log(user);
  // console.log(state);
}
// checkUser();

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