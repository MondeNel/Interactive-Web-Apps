// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

/**
 * we used querySelector for searching and returning the very first element within the document that matches the given selector.
 * It acts as a tool that allows you to find and interact with specific elements in an HTML document.
 * querySelector allows us to easily target elements, the same way we would by using CSS.
 * when we are targeting the class in CSS, we make use of the dot.notation
 * we can also target ID elements by making use of the #, unlike getElementById which restrict you not to target a class
 */

let status1 = document.querySelector("#book1 .status");   
let reserve1 = document.querySelector("#book1 .reserve");
let checkOut1 = document.querySelector("#book1 .checkout");
let checkIn1 = document.querySelector("#book2 .checkin");


let status2 = document.querySelector("#book2 .status");
let reserve2 = document.querySelector("#book2 .reserve");
let checkOut2 = document.querySelector("#book2 .checkout");
let checkIn2 = document.querySelector("#book2 .checkin");

let status3 = document.querySelector("#book3 .status");
let reserve3 = document.querySelector("#book3.reserve");
let checkOut3 = document.querySelector("#book3.checkout");
let checkIn3 = document.querySelector("#book3.checkin");




// CheckIn was not declared as a property of the object, which makes it underfined.
// only Shelf, Reserved, Overdue, and CheckOut that was assigned as a key property value to the STATUS_MAP object.
// we created a new variable to target all the elements of checkin with querySelectorAll
// we than select the element with index 0 from the List, we than set the color style to "black".

let checkin = document.querySelectorAll(".checkin")[0];
checkin.style.color = "black";


// We assign the color from STATUS_MAP.overdue.color to status1.style.color.
// This sets the color of status1 to the color value specified in the STATUS_MAP object for the "overdue" status.

status1.style.color = STATUS_MAP.overdue.color
console.log(status1.style.color); // color = 'red'

// We than use an if statement to check if the  property of the "overdue" status in the STATUS_MAP object is true.
// If it is true, we assign the string 'enabled' to the property variable; otherwise, we assign 'disabled'.
// we than check if overdue for book1 should be enabled or disabled based on the "overdue" status.

if (STATUS_MAP.overdue.canReserve) {         // the property in 'overdue' of canReserve: false,
    console.log(reserve1 = 'enabled');
    } else {
    console.log(reserve1 = 'disabled');
    }


if (STATUS_MAP.overdue.canCheckout) {      // the property in 'overdue' of canCheckout: false,
    console.log(checkOut1 = 'enabled');
} else {
    console.log(checkOut1= 'disabled');
}


if (STATUS_MAP.overdue.canCheckIn) {      // the property in 'overdue' of canCheckIn: true,
    console.log(checkIn1 = 'enabled');
} else {
    console.log(checkIn1 = 'disabled');
}


// CheckIn was not declared as a property of the object, which makes it underfined.
// only Shelf, Reserved, Overdue, and CheckOut was assigned as a key property values to the STATUS_MAP object.
// We use document.querySelectorAll(".checkin") to select all elements with the class "checkin" on the page. 
// We access the element at index 1 of the List by using [1] after document.querySelectorAll(".checkin").
// This selects the first element with the class "checkin", we than set the color style to "black".

checkin = document.querySelectorAll(".checkin")[1];
checkin.style.color = "black";



// We assign the color from STATUS_MAP.reserved.color to status2.style.color.
// This sets the color of status2 to the color value specified in the STATUS_MAP object for the "reserved" status.

status2.style.color = STATUS_MAP.reserved.color
console.log(status2.style.color); // color = 'blue'


// We than use an if statement to check if the  property of the "reserved" status in the STATUS_MAP object is true.
// If it is true, we assign the string 'enabled' to the property variable; otherwise, we assign 'disabled'.
// Check if reservation for book2 should be enabled or disabled based on the "overdue" status

if (STATUS_MAP.reserved.canReserve) {         // the property in 'reserved' of canReserve: false,
console.log(reserve2 = 'enabled');
} else {
console.log(reserve2 = 'disabled');
}

if (STATUS_MAP.reserved.canCheckout) {      // the property in 'reserved' canCheckout: true,
    console.log(checkOut2 = 'enabled');
} else {
    console.log(checkOut2 = 'disabled');
}

if (STATUS_MAP.reserved.canCheckIn) {      // the property in 'overdue' of canCheckIn: false,
    console.log(checkIn2 = 'enabled');
} else {
    console.log(checkIn2 = 'disabled');
}





// CheckIn was not declared as a property of the object, which makes it underfined.
// only Shelf, Reserved, Overdue, and CheckOut was assigned as a key property values to the STATUS_MAP object.
// We use document.querySelectorAll(".checkin") to select all elements with the class "checkin" on the page. 
// We access the element at index 2 of the NodeList by using [2] after document.querySelectorAll(".checkin").
// This selects the first element with the class "checkin", we than set the color style to "black".

checkin = document.querySelectorAll(".checkin")[2];
checkin.style.color = "black";


// We assign the color from STATUS_MAP.shelf.color to status3.style.color.
// This sets the color of status3 to the color value specified in the STATUS_MAP object for the "shelf" status.

status3.style.color = STATUS_MAP.shelf.color
console.log(status3.style.color); // color = 'green'


// We than use an if statement to check if the  property of the "shelf" status in the STATUS_MAP object is true.
// If it is true, we assign the string 'enabled' to the property variable; otherwise, we assign 'disabled'.
// Check if shelf for book3 should be enabled or disabled based on the "overdue" status

if (STATUS_MAP.shelf.canReserve) {         // the property in 'shelf' of canReserve: true,
console.log(reserve3 = 'enabled');
} else {
console.log(reserve3 = 'disabled');
}

if (STATUS_MAP.shelf.canCheckout) {       // the property in 'shelf' canCheckout: true,
    console.log(checkOut3 = 'enabled');
} else {
    console.log(checkOut3 = 'disabled');
}

if (STATUS_MAP.shelf.canCheckIn) {        // the property in 'shelf' of canCheckIn: false,
    console.log(checkIn3 = 'enabled');
} else {
    console.log(checkIn3 = 'disabled');
}
    
