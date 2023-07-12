// nwabisa.js

const private_firstname = "Nwabisa"
const private_surname = "Gabe"
const public_role = "CEO"

export const private_display = private_firstname + " " + private_surname+ " (" + public_role + ")"
document.querySelector('#nwabisa').innerText = private_display

console.log(private_display);