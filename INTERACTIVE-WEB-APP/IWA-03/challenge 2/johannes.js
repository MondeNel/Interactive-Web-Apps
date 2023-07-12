// johannes.js

const private_firstname = "Johannes"
const private_surname = "Potgieter"
const public_role = "Intern"

export const private_display = private_firstname + " " + private_surname+ " (" + public_role + ")"
document.querySelector('#johannes').innerText = private_display

console.log(private_display);