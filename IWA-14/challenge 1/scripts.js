// I first overwite and assign the variables to a data type called 'const'
const firstName = 'John';
const age = 35;
let hobby = 'Coding';


// The logTwice function now takes a message parameter and logs it twice using console.log(message).
const logTwice = (message) => {
  console.log(message);
  console.log(message);
}

/**
 * The hobby function remains the same, 
 * and when called, it invokes the modified logTwice function with the desired message.
 */
function hobby () {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`);
} 

hobby();