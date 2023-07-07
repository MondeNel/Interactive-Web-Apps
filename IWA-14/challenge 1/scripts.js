// I first overwite and assign the variables to a data type called 'const'
const firstName = 'John';
const age = 35;
const hobby = 'Coding';


// The logTwice function now takes a message parameter and logs it twice using console.log(message).
const logTwice = (message) => {
  console.log(message);
  console.log(message);
}

/**
 * I've reassigned hobby to myHobby function because, hobby was already declared. 
 * and when called, it invokes the modified logTwice function with the desired message.
 */
function myhobby () {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`);
} 

myhobby();