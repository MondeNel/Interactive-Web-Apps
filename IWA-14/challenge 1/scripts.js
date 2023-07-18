// I first overwite and assign the values to a data type of 'const' 
// Assigning values to a data type in programming serves the purpose of storing and 
// managing information or state within a program.
const firstName = 'John';
const age = 35;
const hobby = 'Coding';


// The logTwice function now takes a message parameter and logs it twice using console.log(message).
// parameters in a function provide a mechanism for accepting input values, customizing function behavior, 
// manipulating data, abstracting values allowing interpolation(which is a process of calculating values based on known values)
// They are essential for creating flexible and reusable functions that can operate on different sets of data.
const logTwice = (message) => {
  console.log(message);
  console.log(message);
}

/** 
 * the myHobby function is called, to which it invokes the modified logTwice function with the desired message.
 * by invoking the logTwice function, it will console log the message twice to the screen
 * We made use of a template literal in the logTwice function for interpolation.
 */
function myhobby () {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`);
} 

myhobby();
