// firstName = 'John';
// age = 35;
// hobby = 'Coding';

const firstName = 'John';
const age = 35;
const hobby = 'Coding';

const logTwice = (message) => {
  console.log(message);
  console.log(message);
}


function myhobby () {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`);
} 

myhobby();
