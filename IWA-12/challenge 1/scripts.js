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


// checkin.0.color = none
status1.style.color = STATUS_MAP.overdue.color;
reserve1 = STATUS_MAP.overdue.canReserve ? 'enabled' : 'disabled';
checkOut1 = STATUS_MAP.overdue.canCheckout ? 'enabled' : 'disabled';
checkIn1 = STATUS_MAP.overdue.canCheckIn ? 'enabled': 'disabled';

   

// checkin.1.color = none
status2.style.color = STATUS_MAP.reserved.color
reserve2 = STATUS_MAP.reserved.canReserve ? 'disabled' : 'enabled'
checkOut2 = STATUS_MAP.reserved.canCheckout ? 'enabled' : 'disabled'
checkIn2 = STATUS_MAP.reserved.canCheckIn ? 'enabled' : 'disabled'


// checkin.2.color = none
status3.style.color = STATUS_MAP.shelf.color
reserve3 = STATUS_MAP.shelf.canReserve ? 'enabled' : 'disabled'
checkOut3 = STATUS_MAP.shelf.canCheckout? 'enabled' : 'disabled'
checkIn3 = STATUS_MAP.shelf.canCheckIn ? 'enabled' : 'disabled'
