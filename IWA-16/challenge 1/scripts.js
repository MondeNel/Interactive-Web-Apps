// scripts.js

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: "2022-11-18T20:00:00.000Z",
            time: [9, 7, 8, 6],
          },
          {
            date: "2022-12-02T20:00:00.000Z",
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: "2022-11-18T20:00:00.000Z",
            time: [10, 8, 3, 12],
          },
          {
            date: "2022-11-25T20:00:00.000Z",
            time: [6, 8, 9, 11],
          },
          {
            date: "2022-12-02T20:00:00.000Z",
            time: [10, 11, 4, 8],
          },
          {
            date: "2022-12-09T20:00:00.000Z",
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

// Only edit below this comment

// Function to create HTML and display athlete information
// we extract the firstName, id, and races properties from the athlete object using destructuring assignment { }.
const createHtml = (athlete) => {
  const { firstName, id, races } = athlete;

  // Get the latest race details
  // We retrieve the last race in the races array by using races[races.length - 1]
  // To display the athlete information, we convert the date string to a JavaScript Date object using new Date(latestRace.date)
  // Then, we extract the month, day, and year from the Date object
  const totalRaces = races.length;

  const latestRace = races[races.length - 1];
  const raceDate = new Date(latestRace.date);
  const raceTime = latestRace.time.join(":");

  console.log(`First Name: ${firstName}`);
  console.log(`ID: ${id}`);
  console.log(
    `Latest Race Date: ${
      MONTHS[raceDate.getMonth()]
    } ${raceDate.getDate()} ${raceDate.getFullYear()}`
  );
  console.log(`Latest Race Time: ${raceTime}`);
};

createHtml(data.response.data.NM372); // Display Nwabisa's information
createHtml(data.response.data.SV782); // Display Schalk's information

// Created a DocumentFragment to hold the elements
const fragment = document.createDocumentFragment();

// Created a list element
const list = document.createElement("dl");

// Got the current date
const date = new Date();
const day = date.getDate();
const month = MONTHS[date.getMonth()];
const year = date.getFullYear();

// Destructuring the Array
const timeAsArray = [10, 20, 30, 40];
const [first, second, third, fourth] = timeAsArray;

const total = first + second + third + fourth;
console.log(`total time array = ${total}`);

// we get the current hours of the new date we created which is the current date
const hours = Math.floor(total / 60);
console.log(`${date.getHours()} hours`);

// we get the current minutes of the new date we created which is the current date
const minutes = total % 60;
console.log(`${date.getMinutes()} minutes`);

// Display current date and time
console.log(`Current Date: ${day} ${month} ${year}`);
console.log(
  `Current Time: ${date.getHours()} hours ${date.getMinutes()} minutes`
);

// Display total time
console.log(
  `Total Time: ${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`
);

// Append the list element to the fragment
fragment.appendChild(list);

// Append the fragment to the document body
document.body.appendChild(fragment);

const NM372 = data;
const SV782 = data;

// we made use of the spread(...) operator to get all the information on each array key
const { ...nwabisaData } = data.response.data.NM372;
const { ...schalkData } = data.response.data.SV782;

console.log(nwabisaData);
console.log(schalkData);

document.querySelector('[data-athlete="NM372"]').appendChild(createHtml(NM372));
document.querySelector('[data-athlete="SV782"]').appendChild(createHtml(SV782));
