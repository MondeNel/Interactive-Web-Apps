// alex.js

const private_firstname = "Alex"
const private_surname = "Naidoo"
const public_role = "Head of Marketing"

export const private_display = private_firstname + " " + private_surname+ " (" + public_role + ")"
document.querySelector('#alex').innerText = private_display

console.log(private_display);
