const currentYear = new Date().getFullYear();

const holidays = {
  0: {
    id: 0,
    name: "Day of Reconciliation",
    date: `16 December ${currentYear}`,
  },
  1: {
    id: 1,
    name: "Workers Day",
    date: new Date(`1 April ${currentYear}`),
  },
  2: {
    id: 2,
    name: "Day of Goodwill",
    date: new Date(`26 December ${currentYear}`),
  },
  3: {
    id: 3,
    name: "New Year Day",
    date: new Date(`1 January ${currentYear}`),
  },
  4: {
    id: 4,
    name: "Womens Day",
    date: new Date(`9 August ${currentYear}`),
  },
  5: {
    id: 5,
    name: "Heritage Day",
    date: new Date(`24 September ${currentYear}`),
  },
  6: {
    id: 6,
    name: "Christmas Day",
    date: new Date(`25 December ${currentYear} 13:25`),
  },
  7: {
    id: 7,
    name: "Youth Day",
    date: new Date(`16 June ${currentYear}`),
  },
  8: {
    id: 8,
    name: "Human Rights Day",
    date: new Date(`21 March ${currentYear}`),
  },
};

const christmas = 6;
const futureId = 9;

// Do not change code above this comment

/**
* This conditional statement checks if the entire holidays object is equal to the value of futureId.
* If the condition is true, it means that the futureId exists as a key in the holidays object,
  and the code inside the if block is executed.
* If the condition is false, meaning that futureId does not exist as a key in the holidays object,
  the code inside the else block is executed. 
*/ 
if (holidays == futureId) {  
  console.log(futureId);
} else {
  console.log(`ID ${futureId} not created yet`);
}


// This line assigns the value of the holiday with key 6 from the holidays object to the variable copied.
// The holiday with key 6 refers to the "Christmas Day" entry in the holidays object.
const copied = holidays[6]; 
console.log(copied);



// This line assigns a new object to the name property of the copied object.
// it changes the name property of the "Christmas Day" holiday from its original value to the new object.
copied.name = { name: "X-mas Day" };




// This line creates a new Date object representing the correct date and time for Christmas Day.
// It's kinda self explanatory
// we are re-assigning the date of key 6 in the holiday object with a new time.
const correctDate = new Date(`25 December ${currentYear} 00:00:00`);

const correctHours = correctDate.getHours();

const correctMinutes = correctDate.getMinutes();



// This line assigns the value of the date property of the copied object to the variable isEarlier.
const isEarlier = copied.date;



// Check if the new date (copied.date) is earlier than or equal to the date of the holidays array (holidays[6])
// I used the AND logical operator to check for the first falsy value.
if (isEarlier && copied.date <= holidays[6].date) {
  console.log("New date is earlier:", copied.date == holidays[6].date);
}

// Check if the condition isEarlier and copied.date is different from correctDate.
// If both conditions are met, it logs a message to the console and performs a comparison between copied.id and correctDate.
if (isEarlier && copied.date !== correctDate) {
  console.log("ID change:", copied.id === correctDate);
}

if (isEarlier && copied.date !== correctDate) {
  console.log("Name change:", copied.name);
}

if (isEarlier && copied.date !== correctDate) {
  console.log("Date change:", copied.date.getDate());
}

/**
 * In the above code, we use conditional statements and logical operators adding decision-making,
 * branching, and control flow capabilities
 * Which will allow us to perform different expressions in the code base.
 */


/**
 * We retrieve the date values from the holidays array using dot notation and the index number for each element
 * We uses the parseInt() function to convert the date values into integers
 * For each date, it calls the .getTime() method to obtain the corresponding timestamp value
 * The Math.min() function is then used to find the minimum value among all the timestamps.
*/

const firstHolidayTimestamp = Math.min(
  (parseInt(holidays[0].date)),
  (parseInt(holidays[1].date.getTime())),
  (parseInt(holidays[2].date.getTime())),
  (parseInt(holidays[3].date.getTime())),
  (parseInt(holidays[4].date.getTime())),
  (parseInt(holidays[5].date.getTime())),
  (parseInt(holidays[6].date.getTime())),
  (parseInt(holidays[7].date.getTime())),
  (parseInt(holidays[8].date.getTime()))
);

/**
 * We retrieve the date values from the holidays array using dot notation and the index number for each element
 * We uses the parseInt() function to convert the date values into integers
 * For each date, it calls the .getTime() method to obtain the corresponding timestamp value
 * The Math.max() function is then used to find the minimum value among all the timestamps.
*/

const lastHolidayTimestamp = Math.max(
  (parseInt(holidays[0].date)),
  (parseInt(holidays[1].date.getTime())),
  (parseInt(holidays[2].date.getTime())),
  (parseInt(holidays[3].date.getTime())),
  (parseInt(holidays[4].date.getTime())),
  (parseInt(holidays[5].date.getTime())),
  (parseInt(holidays[6].date.getTime())),
  (parseInt(holidays[7].date.getTime())),
  (parseInt(holidays[8].date.getTime()))
);

// This new Date object is corresponded to the current year,
// which will allow us to perform different requests based on the holiday array.
const firstHolidayDate = new Date(firstHolidayTimestamp); 
const lastHolidayDate = new Date(lastHolidayTimestamp);

const firstDay = (firstHolidayDate.getDate()); // ("0" + firstHolidayDate.getDate()).slice(-2);
const firstMonth = (firstHolidayDate.getMonth()); // ("0" + (firstHolidayDate.getMonth() + 1)).slice(-2);
const lastDay = (lastHolidayDate.getDate()); // ("0" + lastHolidayDate.getDate()).slice(-2);
const lastMonth = (lastHolidayDate.getMonth()); // ("0" + (lastHolidayDate.getMonth() + 1)).slice(-2);

console.log(`0${firstDay} / ${firstMonth}1 / ${currentYear}`); // (`${firstDay}/${firstMonth}/${currentYear}`);
console.log(`${lastDay} / ${lastMonth} / ${currentYear}`); // (`${lastDay}/${lastMonth}/${currentYear}`);

// We retrieve the keys of the holidays object using Object.keys(holidays)
// Object provides functionality to all JS objects.
const holidayKeys = Object.keys(holidays); 

// The Math.floor() method rounds a number DOWN to the nearest integer.
// The Math.random() is self explanatory
const randomIndex = Math.floor(Math.random() * holidayKeys.length); 


const randomHoliday = holidays[holidayKeys[randomIndex]];

console.log(randomHoliday.date);

