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

let status1 = document.querySelector(".status");
let reserve1 = document.querySelector(".reserve");
let checkOut1 = document.querySelector(".checkout");

let checkIn1 = document.querySelector(".checkin");
let status2 = document.querySelector(".status");
let reserve2 = document.querySelector(".reserve");
let checkOut2 = document.querySelector(".checkout");
let checkIn2 = document.querySelector(".checkin");

let status3 = document.querySelector(".status");
let reserve3 = document.querySelector(".reserve");
let checkOut3 = document.querySelector(".checkout");
let checkIn3 = document.querySelector(".checkin");


// checkin.0.color = none
status1.style.color = STATUS_MAP.shelf.color;
reserve1 = STATUS_MAP.reserved.canReserve ? 'enabled' : 'disabled';
checkOut1 = STATUS_MAP.checkedOut.canCheckout ? 'enabled' : 'disabled';
checkIn1 = STATUS_MAP.checkedOut.canCheckIn ? 'enabled': 'disabled';


button = document.querySelector("reserve");
console.log(reserve1.disabled = false);
button = document.querySelector("checkout");
console.log(checkOut1.disabled = false);
button = document.querySelector("checkin");
console.log(checkIn1.disabled = true);
   



// checkin.1.color = none
status2.style.color = STATUS_MAP.shelf.color
reserve2 = STATUS_MAP.reserved.canReserve ? 'disabled' : 'enabled'
checkOut2 = STATUS_MAP.checkedOut.canCheckout ? 'enabled' : 'disabled'
checkIn2 = STATUS_MAP.checkedOut.canCheckIn ? 'enabled' : 'disabled'


// checkin.2.color = none
status3.style.color = STATUS_MAP.shelf.color
reserve3 = STATUS_MAP.reserved.canReserve ? 'enabled' : 'disabled'
checkOut3 = STATUS_MAP.checkedOut.canCheckout ? 'enabled' : 'disabled'
checkIn3 = STATUS_MAP.checkedOut.canCheckIn ? 'enabled' : 'disabled'
