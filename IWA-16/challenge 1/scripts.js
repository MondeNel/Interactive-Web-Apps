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


// const createHtml = (athlete) => {
//   firstName, surname, id, races = athlete
//   [date], [time] = races.reverse()
// }

const createHtml = (athlete) => {
  const { firstName, surname, id, races } = athlete;
  const latestRace = races[races.length - 1];
  const { date, time } = latestRace;

  // console.log(createHtml(data.response.data.NM372)); // Display Nwabisa's information
  // console.log(createHtml(data.response.data.SV782)); // Display Schalk's information

  // Created a DocumentFragment to hold the elements
  const fragment = document.createDocumentFragment();

  // Created a list element
  const list = document.createElement("dl");

  const raceDate = new Date(date); // Create a Date object from the date string
  const day = raceDate.getDate();
  const month = MONTHS[raceDate.getMonth()]; // Use getMonth() to get the month index and access the corresponding month name from MONTHS array
  const year = raceDate.getFullYear();


  // Destructuring the Array
  const [first, second, third, fourth] = time; // Destructure the time array

  const total = first + second + third + fourth;
  console.log(`total time array = ${total}`);

  // we get the current hours of the new date we created which is the current date
  const hours = Math.floor(total / 60);

  // we get the current minutes of the new date we created which is the current date
  const minutes = total % 60;


  list.innerHTML = /* html */ `
    <dt>Athlete</dt>
    <dd>${firstName} ${surname}</dd>
    <dt>Total Races</dt>
    <dd>${races.length}</dd>
     <dt>Event Date (Latest)</dt>
    <dd>${day} ${month} ${year}</dd>
  } ${raceDate.getFullYear()}</dd>
    <dt>Total Time (Latest)</dt>
      <dd>${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}</dd>
    
  `;
  fragment.appendChild(list);

  return fragment;
};

const NWABISA = data.response.data.NM372;
const SCHALK = data.response.data.SV782;

// we made use of the spread(...) operator to get all the information on each array key
const { ...nwabisaData } = data.response.data.NM372;
const { ...schalkData } = data.response.data.SV782;

// here we target the html element from the DOM directly with JS.
const nwabisaSection = document.querySelector('[data-athlete="NM372"]');
const schalkSection = document.querySelector('[data-athlete="SV782"]');

// we
nwabisaSection.appendChild(createHtml(NWABISA));
schalkSection.appendChild(createHtml(SCHALK));
