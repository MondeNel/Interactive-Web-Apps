// scripts.js

const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
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
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
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
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment
  
  // Function to create HTML and display athlete information
  // Inside the function, we extract the firstName, id, and races properties from the athlete object using destructuring assignment.
  const createHtml = (athlete) => {
    const { firstName, id, races } = athlete;

    
  // Get the latest race details
  //  We retrieve the last race in the races array by using races[races.length - 1]
  // To display the athlete information, we convert the date string to a JavaScript Date object using new Date(latestRace.date)
  //  Then, we extract the month, day, and year from the Date object
  const latestRace = races[races.length - 1];
  const raceDate = new Date(latestRace.date);
  const raceTime = latestRace.time.join();

  // Display athlete information
  console.log(`First Name:   ${firstName}`);
  console.log(`ID: ${id}`);
  console.log(`Latest Race Date:  ${MONTHS[raceDate.getMonth()]} ${raceDate.getDate()} ${raceDate.getFullYear()}`);
  console.log(`Latest Race Time: ${raceTime}`);
  
  };
  createHtml(data.response.data.NM372);
   
  
    // const fragment = document.createDocumentFragment();
  
    // title = document.createElement(h2);
    // title= id;
    // fragment.appendChild(title);
  
    // const list = document.createElement(dl);
  
    // const day = date.getDate();
    // const month = MONTHS[date.month];
    // const year = date.year;
  
    // first, second, third, fourth = timeAsArray;
    // total = first + second + third + fourth;
  
    // const hours = total / 60;
    // const minutes = total / hours / 60;
  
    // list.innerHTML = /* html */ `
    //   <dt>Athlete</dt>
    //   <dd>${firstName surname}</dd>
  
    //   <dt>Total Races</dt>
    //   <dd>${races}</dd>
  
    //   <dt>Event Date (Latest)</dt>
    //   <dd>${day month year}</dd>
  
    //   <dt>Total Time (Latest)</dt>
    //   <dd>${hours.padStart(2, 0) minutes}</dd>
    // `;
  
  //   fragment.appendChild(list);
  // }
  
  // [NM372], [SV782] = data
  // document.querySelector(NM372).appendChild(createHtml(NM372));
  // document.querySelector(SV782).appendChild(createHtml(SV782));