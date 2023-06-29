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

const copied = holidays[6];

copied.name = { name: "X-mas Day" };

const correctDate = new Date(`25 December ${currentYear} 00:00:00`);

const correctHours = correctDate.getHours();

const correctMinutes = correctDate.getMinutes();

const isEarlier = copied.date;


if (holidays == futureId) {
  console.log(futureId);
} else {
  console.log(`ID ${futureId} not created yet`);
}

if (isEarlier && copied.date <= holidays[6].date) {
  console.log("New date is earlier:", copied.date == holidays[6].date);
}

if (isEarlier && copied.date !== correctDate) {
  console.log("ID change:", copied.id === correctDate);
}

if (isEarlier && copied.date !== correctDate) {
  console.log("Name change:", copied.name);
}

if (isEarlier && copied.date !== correctDate) {
  console.log("Date change:", copied.date.getDate());
}


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

const firstHolidayDate = new Date(firstHolidayTimestamp);
const lastHolidayDate = new Date(lastHolidayTimestamp);

const firstDay = (firstHolidayDate.getDate()); // ("0" + firstHolidayDate.getDate()).slice(-2);
const firstMonth = (firstHolidayDate.getMonth()); // ("0" + (firstHolidayDate.getMonth() + 1)).slice(-2);
const lastDay = (lastHolidayDate.getDate()); // ("0" + lastHolidayDate.getDate()).slice(-2);
const lastMonth = (lastHolidayDate.getMonth()); // ("0" + (lastHolidayDate.getMonth() + 1)).slice(-2);

console.log(`0${firstDay} / ${firstMonth}1 / ${currentYear}`); // (`${firstDay}/${firstMonth}/${currentYear}`);
console.log(`${lastDay} / ${lastMonth} / ${currentYear}`); // (`${lastDay}/${lastMonth}/${currentYear}`);

const randomHoliday = holidays[Math.floor(Math.random() * Object.keys(holidays).length)];
console.log(randomHoliday.date);