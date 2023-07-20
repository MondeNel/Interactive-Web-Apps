// scripts.js

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below


const createArray = (length) => {
    const result = [];

    for (let i = 0; i < length; i++) {
        result.push(i);
    }

    return result
}
console.log(createArray());

/**
* The current variable is now properly created using new Date().
* The setDate() function is used to set the day of the month to 1.
* The getDay() function is used to get the day of the week (0 for Sunday, 1 for Monday, etc.).
* The dayIndex variable is now properly initialized in the inner for-loop, and the loop condition is set to run 7 times (for each day of the week).
* The createData function is now called at the end, and the result is logged to the console.
*/

const createData = () => {
    const current = new Date()
    current.setDate(1)

    const startDay = current.getDay()
    const daysInMonth = getDaysInMonth(current)

    const weeks = createArray(5)
    const days = current.getDay()
    const result = []

    for (const weekIndex of weeks) {
        result.push({
            week: weekIndex + 1,
            days: []
        })

        for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
            const day = (weekIndex * 7) + dayIndex + 1;
            const isValid = day > startDay && day <= (startDay + daysInMonth);

            result[weekIndex].days.push({
                dayOfWeek: dayIndex + 1,
                value: isValid ? day : '',
            })
        }
    }

    return result
}
console.log(createData());
// const addCell = (existing, classString, value) => {
//     const result = /* html */ `
//         ${}

//         <td class="${classString}">
//             &nbsp;${value}&nbsp;
//         </td>
//     `

//     return result
// }

// const createHtml = (data) => {
//     let result = ''

//     for (const { week, } of ) {
//         let inner = ""
//         inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week}`)

//             (const { dayOfWeek, value } of days) {
//             const isToday = new Date().getDate() === value
//             const isWeekend = dayOfWeek ===  | dayOfWeek ===
//             const isAlternate = week % 2 === 0

//             let classString = 'table__cell'

//             if () classString = `${} table__cell_`
//             if () classString = `${} table__cell_`
//             if () classString = `${} table__cell_`
//             inner = addCell()
//         }

//         result = `
//             ${result}
//             <tr>${inner}</tr>
//         `
//     }

//     return result
// }

// // Only edit above

// const current = new Date()
// document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

// const data = createData()
// document.querySelector('[data-content]').innerHTML = createHtml(data)